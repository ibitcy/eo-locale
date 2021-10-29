import { Translator } from '../translator';
import { Locale } from '../models/index';

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      hello:
        '{gender, select, male {hello man} female {hello woman} other {hello}}',
    },
  },
];

test('should use select other case as fallback', () => {
  const { translate } = new Translator('en', locales);

  expect(translate('hello', { gender: 'male' })).toBe('hello man');
  expect(translate('hello', { gender: 'female' })).toBe('hello woman');
  expect(translate('hello', { gender: 'other' })).toBe('hello');
  expect(translate('hello', { gender: 'prefer-not-to' })).toBe('hello');
});
