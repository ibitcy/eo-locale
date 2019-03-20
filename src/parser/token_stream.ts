export enum ETokenType {
	Text = 'txt',
	Variable = 'variable',
	Plural = 'plural',
}

export interface IToken {
	type: ETokenType;
	value: string;
	options?: Map<string, IToken[]>;
}

const OPEN = '{';
const CLOSE = '}';
const DELIMITER = ',';

function* generateCharStream(input: string): IterableIterator<string> {
	let index = 0;

	while (index < input.length) {
		yield input.charAt(index++);
	}
}

export function* generateTokenStream(input: string): IterableIterator<IToken> {
	const stream = generateCharStream(input);
	let step = stream.next();

	const error = () => {
		throw new Error(`Unexpected character "${step.value}"`);
	}

	const skip = (ch: string) => {
		if (ch !== step.value) {
			error();
		}

		step = stream.next();
	};

	const readWhile = (predicate: TPredicate) => {
		let str = '';

		while (!step.done && predicate(step.value)) {
			str += step.value;
			step = stream.next();
		}

		return str;
	};

	const readVariable = () => {
		skip(OPEN);

		const value = readWhile(ch => ch !== CLOSE && ch !== DELIMITER);

		if (step.value === CLOSE) {
			skip(CLOSE);

			return {
				type: ETokenType.Variable,
				value,
			};
		} else {
			skip(DELIMITER);

			return {
				options: readPluralOptions(),
				type: ETokenType.Plural,
				value,
			};
		}
	};

	const readText = () => {
		return {
			type: ETokenType.Text,
			value: readWhile(ch => ch !== OPEN && ch !== CLOSE),
		};
	};

	const readPluralOptions = () => {
		const type = readWhile(ch => ch !== DELIMITER);
		skip(DELIMITER);

		if (type.trim() !== 'plural') {
			error();
		}

		const options = new Map<string, IToken[]>();

		while(step.value !== CLOSE) {
			const name = readText();
			const tokens = readExpression();
			options.set(name.value.trim(), tokens);
		}

		skip(CLOSE);

		return options;
	}

	const readExpression = () => {
		const tokens: IToken[] = [];

		skip(OPEN);
		
		while(step.value !== CLOSE) {
			tokens.push(read());
		}

		skip(CLOSE);

		return tokens;
	};

	const read = () => {
		if (step.value === OPEN) {
			return readVariable();
		}

		return readText();
	};

	while (!step.done) {
		yield read();
	}
}

type TPredicate = (ch: string) => boolean;
