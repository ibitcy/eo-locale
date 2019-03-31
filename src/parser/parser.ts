import { ETokenType, IToken, TokenStream } from './token_stream';

export function format(language: string, message: string, values: Record<string, any>): string {
	const tokenStream = new TokenStream(message);
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
			const tokens = token.options[new Intl.PluralRules(language).select(value)];

			if (tokens) {
				return tokens.map(applyToken).join('');
			}
		}

		return '';
	};

	while (!tokenStream.input.done) {
		result += applyToken(tokenStream.next());
	}

	return result;
}
