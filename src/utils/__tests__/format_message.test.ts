import { convertObjectToMap } from 'eo-utils';

import { createMessageFormatter } from '..';
import { serverPolyfill } from '../../polyfill';

serverPolyfill(['en', 'ru']);

const locales = {
	en: {
		a: 'Hello {name}!',
	},
	ru: {
		a: 'Привет {name}!',
	},
};

const formatMessageEn = createMessageFormatter(
	'en',
	convertObjectToMap(locales.en),
);
const formatMessageRu = createMessageFormatter(
	'ru',
	convertObjectToMap(locales.ru),
);

describe('formatMessage', () => {
	it('Should return "Hello World!"', () => {
		expect(
			formatMessageEn('a', {
				name: 'World',
			}),
		).toBe('Hello World!');
	});

	it('Should return "Привет Мир!"', () => {
		expect(
			formatMessageRu('a', {
				name: 'Мир',
			}),
		).toBe('Привет Мир!');
	});
});
