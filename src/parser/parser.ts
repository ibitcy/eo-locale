import { ETokenType, generateTokenStream, IToken } from './token_stream';

export function format(language: string, message: string, values: Record<string, any>): string {
	const tokenStream = generateTokenStream(message);
	let result = '';

	const applyToken = (token: IToken): string => {
		if (token.type === ETokenType.Text) {
			return token.value;
		}

		const value = values[token.value];

		if (token.type === ETokenType.Variable) {
			return value;
		}

		if (token.type === ETokenType.Plural && token.options) {
			const tokens = token.options.get(new Intl.PluralRules(language).select(value));

			if (tokens) {
				return tokens.map(applyToken).join('');
			}
		}

		return '';
	};

	let step = tokenStream.next();

	while (!step.done) {
		result += applyToken(step.value);
		step = tokenStream.next();
	}

	return result;
}
