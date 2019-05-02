import { ETokenType, IToken, TokenStream } from './token_stream';

export function format(language: string, message: string, params: Record<string, any>): string {
  const tokenStream = new TokenStream(message);
  let result = '';

  const applyToken = ({ options, type, value }: IToken): string => {
    if (type === ETokenType.Variable) {
      return params[value];
    }

    if (!options) {
      return value;
    }

    if (type === ETokenType.Select) {
      return options[params[value]].map(applyToken).join('');
    }

    return options[new Intl.PluralRules(language).select(params[value])].map(applyToken).join('');
  };

  while (!tokenStream.input.done) {
    result += applyToken(tokenStream.next());
  }

  return result;
}
