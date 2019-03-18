export enum ETokenType {
	Close = 'open',
	Comma = 'open',
	Open = 'open',
	Text = 'txt',
}

interface IToken {
	type: ETokenType;
	value: string;
}

const OPEN = '{';
const CLOSE = '}';
const COMMA = ',';

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
	let str = '';

	while (!step.done) {
		switch (step.value) {
			case OPEN:
				if (str) {
					yield {
						type: ETokenType.Text,
						value: str,
					};
					str = '';
				}

				yield {
					type: ETokenType.Open,
					value: step.value,
				};
				break;
			case CLOSE:
				if (str) {
					yield {
						type: ETokenType.Text,
						value: str,
					};
					str = '';
				}

				yield {
					type: ETokenType.Close,
					value: step.value,
				};
				break;
			case COMMA:
				if (str) {
					yield {
						type: ETokenType.Text,
						value: str,
					};
					str = '';
				}

				yield {
					type: ETokenType.Comma,
					value: step.value,
				};
				break;
			default:
				str += step.value;
		}

		step = stream.next();
	}

	if (str) {
		yield {
			type: ETokenType.Text,
			value: str,
		};
	}
}
