import { TokenType, Token, TokenStream } from './token_stream';

export function getTranslationParts(language: string, message: string, params: Record<string, any>): any[] {
  const tokenStream = new TokenStream(message);
  let result: any[] = [];

  const applyToken = ({ options, type, value }: Token): void => {
    if (type === TokenType.Variable) {
      result.push(params[value]);
      return;
    }

    if (!options) {
      result.push(value);
      return;
    }

    if (type === TokenType.Select) {
      const optionTokens = options[params[value]] || options.other;

      result.concat(optionTokens.map(applyToken));
      return;
    }

    try {
      result.concat(options[new Intl.PluralRules(language).select(params[value])].map(applyToken));
    } catch (err) {
      result.concat(options['other'].map(applyToken));
    }
  };

  while (!tokenStream.input.done) {
    applyToken(tokenStream.next());
  }

  return result;
}
