import { Translator } from '../translator';

const enTranslator = new Translator();
const ruTranslator = new Translator({
	language: 'ru',
});

describe('formatNumber', () => {
	it('Should be 1', () => {
		expect(
			enTranslator.formatNumber(1.0, {
				maximumFractionDigits: 2,
			}),
		).toBe('1');
	});

	it('Should be 1.00', () => {
		expect(
			enTranslator.formatNumber(1.0, {
				maximumFractionDigits: 2,
				minimumFractionDigits: 2,
			}),
		).toBe('1.00');
	});

	it('Should be 1,000,000', () => {
		expect(enTranslator.formatNumber(1000000)).toBe('1,000,000');
	});

	it('Should be 1 000 000', () => {
		expect(ruTranslator.formatNumber(1000000)).toBe('1 000 000');
	});

	it('Format currency USD', () => {
		expect(
			enTranslator.formatNumber(1000000.844, {
				currency: 'USD',
				maximumFractionDigits: 2,
				minimumFractionDigits: 0,
				style: 'currency',
			}),
		).toBe('$1,000,000.84');
	});

	it('Should be 1', () => {
		expect(
			enTranslator.formatNumber(1.0, {
				maximumFractionDigits: 2,
			}),
		).toBe('1');
	});

	it('Should be 1 000 000', () => {
		expect(ruTranslator.formatNumber(1000000)).toBe('1 000 000');
	});

	it('Format currency USD', () => {
		expect(
			enTranslator.formatNumber(1000000.844, {
				currency: 'USD',
				maximumFractionDigits: 2,
				minimumFractionDigits: 0,
				style: 'currency',
			}),
		).toBe('$1,000,000.84');
	});
});
