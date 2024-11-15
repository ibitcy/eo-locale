import { TokenType, Token, TokenStream } from '../token_stream';

describe('Read plural options', () => {
  it('Should return plural token', () => {
    const stream = new TokenStream(
      '{count, plural, one {One, item} other {{count} ite,ms}}',
    );
    const options: Record<string, Token[]> = {};

    options.one = [
      {
        type: TokenType.Text,
        value: 'One, item',
      },
    ];

    options.other = [
      {
        type: TokenType.Variable,
        value: 'count',
      },
      {
        type: TokenType.Text,
        value: ' ite,ms',
      },
    ];

    expect(stream.next()).toEqual({
      options,
      type: TokenType.Plural,
      value: 'count',
    });
    expect(stream.input.done).toBeTruthy();
  });

  it('Should throw error', () => {
    const stream = new TokenStream('{c,,}');

    expect(() => {
      stream.next();
    }).toThrowError();
  });

  it('Should throw error', () => {
    const stream = new TokenStream('{c,p,}');

    expect(() => {
      stream.next();
    }).toThrowError();
  });
});
