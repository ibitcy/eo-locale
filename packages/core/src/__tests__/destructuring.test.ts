import { Translator } from '../translator';
import { Locale } from '../models/index';

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      hello: 'Hello world',
    },
  },
];

describe('Destructuring', () => {
  test('Should translate', () => {
    const { translate } = new Translator('en', locales);

    expect(translate('hello')).toBe('Hello world');
  });
});
