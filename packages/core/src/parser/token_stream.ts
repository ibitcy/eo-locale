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
  readonly input: InputStream;

  constructor(message: string) {
    this.input = new InputStream(message);
  }

  next(): Token {
    if (this.input.value === OPEN) {
      return this.#readVariable();
    }

    return this.#readText();
  }

  #skip(ch: string) {
    if (ch !== this.input.value) {
      this.input.croak();
    }

    this.input.next();
  }

  #readWhile(predicate: TPredicate) {
    let str = '';

    while (!this.input.done && predicate(this.input.value)) {
      str += this.input.value;
      this.input.next();
    }

    return str;
  }

  #readVariable() {
    this.#skip(OPEN);

    const value = this.#readWhile(ch => !PUNC_SYMBOLS.includes(ch)).trim();

    if (value.length === 0) {
      this.input.croak();
    }

    if (this.input.value === CLOSE) {
      this.#skip(CLOSE);

      return {
        type: TokenType.Variable,
        value,
      };
    }

    this.#skip(DELIMITER);

    const type = this.#readVariableType() as TokenType;

    return {
      options: this.#readVariableOptions(),
      type,
      value,
    };
  }

  #readText() {
    return {
      type: TokenType.Text,
      value: this.#readWhile(ch => ch !== OPEN && ch !== CLOSE),
    };
  }

  #readVariableType() {
    const type = this.#readWhile(ch => ch !== DELIMITER).trim();

    if (type === PLURAL_IDENTIFIER) {
      return TokenType.Plural;
    }

    if (type === SELECT_IDENTIFIER) {
      return TokenType.Select;
    }

    this.input.croak();
  }

  #readVariableOptions() {
    this.#skip(DELIMITER);

    const options: Record<string, Token[]> = {};

    while (this.input.value !== CLOSE) {
      options[this.#readText().value.trim()] = this.#readExpression();
    }

    this.#skip(CLOSE);

    return options;
  }

  #readExpression() {
    const tokens: Token[] = [];

    this.#skip(OPEN);

    while (this.input.value !== CLOSE) {
      tokens.push(this.next());
    }

    this.#skip(CLOSE);

    return tokens;
  }
}
