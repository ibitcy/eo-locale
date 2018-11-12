import * as React from 'react';

import { convertObjectToMap, createMessageFormatter } from '..';

const locales = {
	en: {
		a: 'Hello {name}!',
		b: 100,
	},
	ru: {
		a: 'Привет {name}!',
		b: 100,
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

	it('Should return "Hello World!"', () => {
		expect(
			formatMessageEn('a', {
				name: React.createElement('span', null, 'World', React.createElement('sup', null, 'EO')),
			}),
		).toBe('Hello <span>World<sup>EO</sup></span>!');
	});

	it('Should return "Привет Мир!"', () => {
		expect(
			formatMessageRu('a', {
				name: 'Мир',
			}),
		).toBe('Привет Мир!');
	});

	it('Should return defaultMessage', () => {
		expect(
			formatMessageEn('not_found', {
				defaultMessage: 'default',
			}),
		).toBe('default');
	});

	it('Should correct format number value', () => {
		expect(formatMessageEn('b')).toBe('100');
	});

	it('Should correct handle error', () => {
		expect(formatMessageEn('a')).toBe('a');
	});

	it('Should return value', () => {
		expect(formatMessageEn('not_found')).toBe('not_found');
	});
});
