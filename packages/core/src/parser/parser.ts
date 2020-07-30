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
      result.concat(options[params[value]].map(applyToken));
      return;
    }

    result.concat(options[new Intl.PluralRules(language).select(params[value])].map(applyToken));
  };

  while (!tokenStream.input.done) {
    applyToken(tokenStream.next());
  }

  return result;
}
