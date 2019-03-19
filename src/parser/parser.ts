import { ETokenType, IToken, tokenStream } from './token_stream';

export function format(language: string, message: string, values: Record<string, any>): string {
	const tokens = tokenStream(message);
	let result = '';

	const applyToken = (token: IToken): string => {
		if (token.type === ETokenType.Text) {
			return token.value;
		}

		if (token.type === ETokenType.Variable) {
			const value = values[token.value];

			if (typeof value === 'undefined') {
				return `{${token.value}}`;
			}

			return value;
		}

		if (token.type === ETokenType.Plural && token.options) {
			const value: number = values[token.value];
			const pr = new Intl.PluralRules(language);
			const options = token.options.get(pr.select(value));

			if (options) {
				return options.map(option => option ? applyToken(option) : '').join('');
			}
		}

		return '';
	}

	let step = tokens.next();

	while(!step.done) {
		result += applyToken(step.value);
		step = tokens.next();
	}

	return result;
}
