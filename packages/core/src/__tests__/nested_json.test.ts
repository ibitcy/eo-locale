import { Translator } from '../translator';
import { Locale } from '../models/index';

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      page1: {
        hello: 'Hello world',
      },
      page2: {
        hello: 'Hello react-intl-universal!',
      },
    },
  },
];

describe('Nested json', () => {
  test('Should translate', () => {
    const translator = new Translator('en', locales);

    expect(translator.translate('page1.hello')).toBe('Hello world');
  });

  test('Should translate', () => {
    const translator = new Translator('en', locales);

    expect(translator.translate('page1.hello')).toBe('Hello world');
  });
});
