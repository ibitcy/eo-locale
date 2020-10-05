import { TokenType, TokenStream } from '../token_stream';

describe('TokenStream', () => {
  it('Should return tokens', () => {
    const stream = new TokenStream('Hello {name}!');

    expect(stream.next()).toEqual({
      type: TokenType.Text,
      value: 'Hello ',
    });
    expect(stream.next()).toEqual({
      type: TokenType.Variable,
      value: 'name',
    });
    expect(stream.next()).toEqual({
      type: TokenType.Text,
      value: '!',
    });
    expect(stream.input.done).toBeTruthy();
  });
});
