import { createMessageFormatter, convertObjectToMap } from '../index';

const locales = {
	en: {
		a: 'Hello',
	},
	ru: {
		a: 'Привет',
	}
}

const formatMessageEn = createMessageFormatter('en', convertObjectToMap(locales.en));
const formatMessageRu = createMessageFormatter('ru', convertObjectToMap(locales.ru));

describe('formatMessage', () => {
	it('Should return Hello', () => {
		expect(formatMessageEn('a')).toBe('Hello');
	});

	it('Should return Привет', () => {
		expect(formatMessageRu('a')).toBe('Привет');
	});
})