import { TokenType, Token, TokenStream } from './token_stream';

const POUND_REGEXP = /#/g;

export function getTranslationParts(language: string, message: string, params: Record<string, any>): any[] {
  const tokenStream = new TokenStream(message);
  const result: any[] = [];

  // `pound` is the formatted value of the closest enclosing plural, used to replace `#`
  const applyToken = ({ offset = 0, options, type, value }: Token, pound?: string): void => {
    if (type === TokenType.Variable) {
      result.push(params[value]);
      return;
    }

    if (!options) {
      result.push(pound === undefined ? value : value.replace(POUND_REGEXP, pound));
      return;
    }

    let optionTokens: Token[] | undefined;

    if (type === TokenType.Select) {
      optionTokens = options[params[value]] || options.other;
    } else {
      const count = Number(params[value]);

      pound = new Intl.NumberFormat(language).format(count - offset);
      optionTokens = options['=' + count] || options[getPluralCategory(language, count - offset)] || options.other;
    }

    if (!optionTokens) {
      throw new Error(`No option matched for "${value}".`);
    }

    optionTokens.forEach(token => applyToken(token, pound));
  };

  while (!tokenStream.input.done) {
    applyToken(tokenStream.next());
  }

  return result;
}

function getPluralCategory(language: string, count: number): string {
  try {
    return new Intl.PluralRules(language).select(count);
  } catch (error) {
    return 'other';
  }
}
