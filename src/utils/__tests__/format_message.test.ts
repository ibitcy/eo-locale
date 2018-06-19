import { createMessageFormatter, convertObjectToMap } from '../index';

const locales = {
	en: {
		a: 'Hello {name}!',
	},
	ru: {
		a: 'Привет {name}!',
	}
}

const formatMessageEn = createMessageFormatter('en', convertObjectToMap(locales.en));
const formatMessageRu = createMessageFormatter('ru', convertObjectToMap(locales.ru));

describe('formatMessage', () => {
	it('Should return "Hello World!"', () => {
		expect(formatMessageEn('a', {
			values: {
				name: 'World',
			}
		})).toBe('Hello World!');
	});

	it('Should return "Привет Мир!"', () => {
		expect(formatMessageRu('a', {
			values: {
				name: 'Мир'
			}
		})).toBe('Привет Мир!');
	});
})