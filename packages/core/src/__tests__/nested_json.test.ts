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
      'page.3': 'Hello value with dotted key!'
    },
  },
];

describe('Nested json', () => {
  const translator = new Translator('en', locales);

  test('Should translate', () => {
    expect(translator.translate('page1.hello')).toBe('Hello world');
  });

  test('Should translate with dotted key', () => {    
    expect(translator.translate('page.3')).toBe('Hello value with dotted key!');
  });
});
