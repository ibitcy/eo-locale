import { InputStream } from './input_stream';

export enum TokenType {
  Plural,
  Select,
  Text,
  Variable,
}

export interface Token {
  type: TokenType;
  value: string;
  options?: Record<string, Token[]>;
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

  public next(): Token {
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
        type: TokenType.Variable,
        value,
      };
    }

    this.skip(DELIMITER);

    const type = this.readVariableType() as TokenType;

    return {
      options: this.readVariableOptions(),
      type,
      value,
    };
  }

  private readText() {
    return {
      type: TokenType.Text,
      value: this.readWhile(ch => ch !== OPEN && ch !== CLOSE),
    };
  }

  private readVariableType() {
    const type = this.readWhile(ch => ch !== DELIMITER).trim();

    if (type === PLURAL_IDENTIFIER) {
      return TokenType.Plural;
    }

    if (type === SELECT_IDENTIFIER) {
      return TokenType.Select;
    }

    this.input.croak();
  }

  private readVariableOptions() {
    this.skip(DELIMITER);

    const options: Record<string, Token[]> = {};

    while (this.input.value !== CLOSE) {
      options[this.readText().value.trim()] = this.readExpression();
    }

    this.skip(CLOSE);

    return options;
  }

  private readExpression() {
    const tokens: Token[] = [];

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
