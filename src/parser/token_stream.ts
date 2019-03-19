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

function* inputStream(input: string): IterableIterator<string> {
	let index = 0;

	while (index < input.length) {
		yield input[index];
		index += 1;
	}
}

export function* tokenStream(input: string): IterableIterator<IToken> {
	const stream = inputStream(input);
	let step = stream.next();

	const skip = (ch: string) => {
		if (ch !== step.value) {
			throw new Error(`Unexpected character "${step.value}". Should be "${ch}".`);
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
			throw new Error('invalid format');
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
			if (step.value === OPEN) {
				tokens.push(readVariable())
			} else {
				tokens.push(readText());
			}
		}

		skip(CLOSE);

		return tokens;
	};

	const read = () => {
		if (step.value === OPEN) {
			const variable = readVariable();
			
			if (variable.type === ETokenType.Plural) {
				return {
					...variable,
					options: readPluralOptions(),
				};
			}
	
			return variable;
		}

		return readText();
	};

	while (!step.done) {
		yield read();
	}
}

type TPredicate = (ch: string) => boolean;
