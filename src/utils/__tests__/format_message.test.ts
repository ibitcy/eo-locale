import { ILocale } from '../../models';
import { Translator } from '../translator';

const locales: ILocale[] = [
	{
		language: 'en',
		messages: {
			a: 'Hello {name}!',
			b: 100,
			c: 'Hello \\{name\\}!',
		},
	},
	{
		language: 'ru',
		messages: {
			a: 'Привет {name}!',
			b: 100,
			c: 'Привет \\{name\\}!',
		},
	},
];

const enTranslator = new Translator({
	locales,
});
const ruTranslator = new Translator({
	language: 'ru',
	locales,
});

describe('formatMessage', () => {
	it('Should return "Hello World!"', () => {
		expect(
			enTranslator.formatMessage('a', {
				name: 'World',
			}),
		).toBe('Hello World!');
	});

	it('Should return "Привет Мир!"', () => {
		expect(
			ruTranslator.formatMessage('a', {
				name: 'Мир',
			}),
		).toBe('Привет Мир!');
	});

	it('Should return defaultMessage', () => {
		expect(
			enTranslator.formatMessage('not_found', {
				defaultMessage: 'default',
			}),
		).toBe('default');
	});

	it('Should correct format number value', () => {
		expect(enTranslator.formatMessage('b')).toBe('100');
	});

	it('Should correct handle error', () => {
		expect(enTranslator.formatMessage('a')).toBe('Hello {name}!');
	});

	it('Should return value', () => {
		expect(enTranslator.formatMessage('not_found')).toBe('not_found');
	});

	it('Should allow escaping of syntax chars', () => {
		expect(
			enTranslator.formatMessage('c', {
				name: 'World',
			}),
		).toBe('Hello {name}!');
	});
});
