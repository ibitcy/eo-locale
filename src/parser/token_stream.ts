import { InputStream } from './input_stream';

export enum ETokenType {
	Plural,
	Text,
	Variable,
}

export interface IToken {
	type: ETokenType;
	value: string;
	options?: Map<string, IToken[]>;
}

type TPredicate = (ch: string) => boolean;

const OPEN = '{';
const CLOSE = '}';
const DELIMITER = ',';

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
	};

	public get done(): boolean {
		return this.input.done;
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

		const value = this.readWhile(ch => ch !== CLOSE && ch !== DELIMITER);

		if (this.input.value === CLOSE) {
			this.skip(CLOSE);

			return {
				type: ETokenType.Variable,
				value,
			};
		} else {
			this.skip(DELIMITER);

			return {
				options: this.readPluralOptions(),
				type: ETokenType.Plural,
				value,
			};
		}
	}

	private readText() {
		return {
			type: ETokenType.Text,
			value: this.readWhile(ch => ch !== OPEN && ch !== CLOSE),
		};
	}

	private readPluralOptions() {
		const type = this.readWhile(ch => ch !== DELIMITER);
		this.skip(DELIMITER);

		if (type.trim() !== 'plural') {
			this.input.croak();
		}

		const options = new Map<string, IToken[]>();

		while (this.input.value !== CLOSE) {
			options.set(this.readText().value.trim(), this.readExpression());
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
