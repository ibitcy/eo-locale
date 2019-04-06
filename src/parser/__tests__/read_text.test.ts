import { ETokenType, TokenStream } from '../token_stream';

describe('Read text', () => {
  it('Should correct read text', () => {
    const tokenStream = new TokenStream(' a ');

    expect(tokenStream.next()).toEqual({
      type: ETokenType.Text,
      value: ' a ',
    });
    expect(tokenStream.input.done).toBeTruthy();
  });

  it('Should correct read text', () => {
    const tokenStream = new TokenStream('a b ');

    expect(tokenStream.next()).toEqual({
      type: ETokenType.Text,
      value: 'a b ',
    });
    expect(tokenStream.input.done).toBeTruthy();
  });

  it('Should correct handle empty string', () => {
    const tokenStream = new TokenStream('');

    expect(tokenStream.next()).toEqual({
      type: ETokenType.Text,
      value: '',
    });
    expect(tokenStream.input.done).toBeTruthy();
  });
});
