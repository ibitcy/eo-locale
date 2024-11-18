import type { Locale } from '../model';
import { Translator } from '../translator';

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      hello:
        '{gender, select, male {hello man} female {hello woman} other {hello}}',
      minute: '{count, plural,one {min {count}} other {min {count}}}',
    },
  },
  {
    language: 'ar',
    messages: {
      hello:
        '{gender, select, male {hello man} female {hello woman} other {hello}}',
      minute: '{count, plural,one {min {count}} other {min {count}}}',
    },
  },
];

test('should use select other case as fallback', () => {
  const { translate } = new Translator('en', locales);

  expect(translate('hello', undefined, { gender: 'male' })).toBe('hello man');
  expect(translate('hello', undefined, { gender: 'female' })).toBe(
    'hello woman',
  );
  expect(translate('hello', undefined, { gender: 'other' })).toBe('hello');
  expect(translate('hello', undefined, { gender: 'prefer-not-to' })).toBe(
    'hello',
  );
});

test('should use select other case as fallback for Arabic language', () => {
  const { translate } = new Translator('ar', locales);

  expect(translate('minute', undefined, { count: 1 })).toBe('min 1');
  expect(translate('minute', undefined, { count: 2 })).toBe('min 2');
});
