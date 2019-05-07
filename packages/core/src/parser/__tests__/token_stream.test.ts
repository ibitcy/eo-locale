import { ETokenType, TokenStream } from '../token_stream';

describe('TokenStream', () => {
  it('Should return tokens', () => {
    const stream = new TokenStream('Hello {name}!');

    expect(stream.next()).toEqual({
      type: ETokenType.Text,
      value: 'Hello ',
    });
    expect(stream.next()).toEqual({
      type: ETokenType.Variable,
      value: 'name',
    });
    expect(stream.next()).toEqual({
      type: ETokenType.Text,
      value: '!',
    });
    expect(stream.input.done).toBeTruthy();
  });
});
