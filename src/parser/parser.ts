import { ETokenType, IToken, tokenStream } from './token_stream';

export function format(language: string, message: string, values: Record<string, any>): string {
	const tokens = tokenStream(message);
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
			const options = token.options.get(new Intl.PluralRules(language).select(value));

			if (options) {
				return options.map(applyToken).join('');
			}
		}

		return '';
	};

	let step = tokens.next();

	while (!step.done) {
		result += applyToken(step.value);
		step = tokens.next();
	}

	return result;
}
