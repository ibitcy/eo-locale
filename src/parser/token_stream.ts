import { InputStream } from './input_stream';

export enum ETokenType {
  Plural,
  Select,
  Text,
  Variable,
}

export interface IToken {
  type: ETokenType;
  value: string;
  options?: Record<string, IToken[]>;
}

type TPredicate = (ch: string) => boolean;

const OPEN = '{';
const CLOSE = '}';
const DELIMITER = ',';

const PUNC_SYMBOLS = [OPEN, CLOSE, DELIMITER];
const PLURAL_IDENTIFIER = 'plural';
const SELECT_IDENTIFIER = 'select';

export class TokenStream {
  public readonly input: InputStream;

  public constructor(message: string) {
    this.input = new InputStream(message);
  }

  public next(): IToken {
    if (this.input.value === OPEN) {
      return this.readVariable();
    }

    return this.readText();
  }

  private skip(ch: string) {
    if (ch !== this.input.value) {
      this.input.croak();
    }

    this.input.next();
  }

  private readWhile(predicate: TPredicate) {
    let str = '';

    while (!this.input.done && predicate(this.input.value)) {
      str += this.input.value;
      this.input.next();
    }

    return str;
  }

  private readVariable() {
    this.skip(OPEN);

    const value = this.readWhile(ch => !isPunc(ch)).trim();

    if (value.length === 0) {
      this.input.croak();
    }

    if (this.input.value === CLOSE) {
      this.skip(CLOSE);

      return {
        type: ETokenType.Variable,
        value,
      };
    }

    this.skip(DELIMITER);

    const type = this.readVariableType() as ETokenType;

    return {
      options: this.readVariableOptions(),
      type,
      value,
    };
  }

  private readText() {
    return {
      type: ETokenType.Text,
      value: this.readWhile(ch => ch !== OPEN && ch !== CLOSE),
    };
  }

  private readVariableType() {
    const type = this.readWhile(ch => ch !== DELIMITER).trim();

    if (type === PLURAL_IDENTIFIER) {
      return ETokenType.Plural;
    }

    if (type === SELECT_IDENTIFIER) {
      return ETokenType.Select;
    }

    this.input.croak();
  }

  private readVariableOptions() {
    this.skip(DELIMITER);

    const options: Record<string, IToken[]> = {};

    while (this.input.value !== CLOSE) {
      options[this.readText().value.trim()] = this.readExpression();
    }

    this.skip(CLOSE);

    return options;
  }

  private readExpression() {
    const tokens: IToken[] = [];

    this.skip(OPEN);

    while (this.input.value !== CLOSE) {
      tokens.push(this.next());
    }

    this.skip(CLOSE);

    return tokens;
  }
}

function isPunc(ch: string): boolean {
  return PUNC_SYMBOLS.includes(ch);
}
