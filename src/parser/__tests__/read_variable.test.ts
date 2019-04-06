import { ETokenType, TokenStream } from '../token_stream';

describe('Read variable', () => {
  it('Should correct read variable', () => {
    const tokenStream = new TokenStream('{a}');

    expect(tokenStream.next()).toEqual({
      type: ETokenType.Variable,
      value: 'a',
    });
    expect(tokenStream.input.done).toBeTruthy();
  });

  it('Should correct read variable', () => {
    const tokenStream = new TokenStream('{ a }');

    expect(tokenStream.next()).toEqual({
      type: ETokenType.Variable,
      value: 'a',
    });
    expect(tokenStream.input.done).toBeTruthy();
  });

  it('Should throw error for empty variable', () => {
    const tokenStream = new TokenStream('{}');

    expect(() => {
      tokenStream.next();
    }).toThrowError();
  });

  it('Should throw error for incorrect variable syntax', () => {
    const tokenStream = new TokenStream('{a{a}');

    expect(() => {
      tokenStream.next();
    }).toThrowError();
  });
});
