import { Translator } from '../translator';
import { Locale } from '../models/index';

const party = `{gender_of_host, select,
  female {
    {num_guests, plural, offset:1
      =0 {{host} does not give a party.}
      =1 {{host} invites {guest} to her party.}
      =2 {{host} invites {guest} and one other person to her party.}
      other {{host} invites {guest} and # other people to her party.}
    }
  }
  other {
    {num_guests, plural, offset:1
      =0 {{host} does not give a party.}
      =1 {{host} invites {guest} to their party.}
      =2 {{host} invites {guest} and one other person to their party.}
      other {{host} invites {guest} and # other people to their party.}
    }
  }
}`;

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      exact: '{count, plural, =0 {no items} one {one item} other {# items}}',
      offset: '{count, plural, offset:1 =0 {nobody} one {you and one other} other {you and # others}}',
      party,
      pound: 'Price: #{count, plural, other {# #}}',
      nested: '{count, plural, other {{gender, select, male {he has #} other {they have #}}}}',
      missing: '{count, plural, one {one}}',
      spaced: '{gender, select,\n  male {he}\n  other {they}\n}',
    },
  },
];

const { translate } = new Translator('en', locales);

test('should match exact plural options before plural categories', () => {
  expect(translate('exact', { count: 0 })).toBe('no items');
  expect(translate('exact', { count: 1 })).toBe('one item');
  expect(translate('exact', { count: 1000 })).toBe('1,000 items');
});

test('should apply plural offset', () => {
  expect(translate('offset', { count: 0 })).toBe('nobody');
  expect(translate('offset', { count: 2 })).toBe('you and one other');
  expect(translate('offset', { count: 5 })).toBe('you and 4 others');
});

test('should replace # only inside plural', () => {
  expect(translate('pound', { count: 3 })).toBe('Price: #3 3');
  expect(translate('nested', { count: 2, gender: 'male' })).toBe('he has 2');
  expect(translate('nested', { count: 2, gender: 'female' })).toBe('they have 2');
});

test('should allow whitespace around options', () => {
  expect(translate('spaced', { gender: 'male' })).toBe('he');
  expect(translate('spaced', { gender: 'female' })).toBe('they');
});

test('should parse nested select with plural offset', () => {
  const params = { host: 'Ann', guest: 'Bob' };

  expect(translate('party', { ...params, gender_of_host: 'female', num_guests: 0 }).trim()).toBe('Ann does not give a party.');
  expect(translate('party', { ...params, gender_of_host: 'female', num_guests: 2 }).trim()).toBe('Ann invites Bob and one other person to her party.');
  expect(translate('party', { ...params, gender_of_host: 'male', num_guests: 5 }).trim()).toBe('Ann invites Bob and 4 other people to their party.');
});

test('should report error when no plural option matched', () => {
  const translator = new Translator('en', locales);
  translator.onError = jest.fn();

  expect(translator.translate('missing', { count: 5 })).toBe('{count, plural, one {one}}');
  expect(translator.onError).toHaveBeenCalledTimes(1);
});

test('should use actual defaultMessage for missing ids', () => {
  const translator = new Translator('en', locales);
  translator.onError = jest.fn();

  expect(translator.translate('unknown', { defaultMessage: 'first' })).toBe('first');
  expect(translator.translate('unknown', { defaultMessage: 'second' })).toBe('second');
  expect(translator.translate('unknown')).toBe('unknown');
  expect(translator.onError).toHaveBeenCalledTimes(1);
});
