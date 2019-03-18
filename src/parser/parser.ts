import { ETokenType, IToken, tokenStream } from './token_stream';

enum ENodeType {
	Plural = 'plural',
	Text = 'txt',
	Variable = 'var',
}

interface INode {
	type: ENodeType;
	value: string;

	options?: Map<string, INode[]>;
}

// TODO think about seq of tokens
export function format(language: string, message: string, values: Record<string, any>): string {
	const nodes = parse(message);

	return nodes
		.map(node => {
			if (node.type === ENodeType.Text) {
				return node.value;
			}

			if (node.type === ENodeType.Variable) {
				const value = values[node.value];

				if (typeof value === 'undefined') {
					return `{${node.value}}`;
				}

				return values[node.value];
			}

			if (node.type === ENodeType.Plural && node.options) {
				const value: number = values[node.value];
				const pr = new Intl.PluralRules(language);
				const items = node.options.get(pr.select(value));

				if (items) {
					return items
						.map(item => {
							if (item.type === ENodeType.Text) {
								return item.value;
							}

							if (item.type === ENodeType.Variable) {
								const itemValue = values[item.value];

								if (typeof itemValue === 'undefined') {
									return `{${item.value}}`;
								}

								return values[item.value];
							}
						})
						.join('');
				}

				return '';
			}
		})
		.join('');
}

export function parse(input: string): INode[] {
	const stream = tokenStream(input);
	const nodes: INode[] = [];
	let step = stream.next();

	while (!step.done) {
		const token = step.value;

		if (token.type === ETokenType.Text) {
			nodes.push({
				type: ENodeType.Text,
				value: token.value,
			});
		}

		if (token.type === ETokenType.Open) {
			nodes.push(readExpression(stream));
		}

		step = stream.next();
	}

	return nodes;
}

function readExpression(stream: IterableIterator<IToken>): INode {
	let step = stream.next(); // Skip open

	if (step.value.type !== ETokenType.Text) {
		throw new Error('Invalid format');
	}
	const variable = step.value.value;

	step = stream.next();

	if (step.value.type === ETokenType.Close) {
		return {
			type: ENodeType.Variable,
			value: variable,
		};
	}

	return readPlural(stream, variable);
}

function readPlural(stream: IterableIterator<IToken>, variable: string): INode {
	const options = new Map<string, INode[]>();
	let step = stream.next();

	if (step.value.type !== ETokenType.Text) {
		throw new Error('Invalid format');
	}

	step = stream.next();

	if (step.value.type !== ETokenType.Comma) {
		throw new Error('Invalid format');
	}

	step = stream.next();

	while (step.value.type !== ETokenType.Close) {
		const token = step.value;
		options.set(token.value.trim(), readPluralOption(stream));

		step = stream.next();
	}

	return {
		options,
		type: ENodeType.Plural,
		value: variable,
	};
}

function readPluralOption(stream: IterableIterator<IToken>) {
	let depth = 1;
	let step = stream.next(); // Skip variable
	const result: INode[] = [];

	while (depth > 0) {
		step = stream.next();
		const token = step.value;

		if (token.type === ETokenType.Text) {
			if (depth > 1) {
				result.push({
					type: ENodeType.Variable,
					value: token.value,
				});
			} else {
				result.push({
					type: ENodeType.Text,
					value: token.value,
				});
			}
		}

		if (token.type === ETokenType.Open) {
			depth += 1;
		}

		if (token.type === ETokenType.Close) {
			depth -= 1;
		}
	}

	return result;
}
