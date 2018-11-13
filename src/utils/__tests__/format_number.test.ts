import { createFormatNumber, formatNumber } from '..';

describe('formatNumber', () => {
	it('Should be 1', () => {
		expect(
			formatNumber(1.0, {
				language: 'en',
				maximumFractionDigits: 2,
			}),
		).toBe('1');
	});

	it('Should be 1.00', () => {
		expect(
			formatNumber(1.0, {
				language: 'en',
				maximumFractionDigits: 2,
				minimumFractionDigits: 2,
			}),
		).toBe('1.00');
	});

	it('Should be 1,000,000', () => {
		expect(
			formatNumber(1000000, {
				language: 'en',
			}),
		).toBe('1,000,000');
	});

	it('Should be 1 000 000', () => {
		expect(
			formatNumber(1000000, {
				language: 'ru',
			}),
		).toBe('1 000 000');
	});

	it('Format currency USD', () => {
		expect(
			formatNumber(1000000.844, {
				currency: 'USD',
				language: 'en',
				maximumFractionDigits: 2,
				minimumFractionDigits: 0,
				style: 'currency',
			}),
		).toBe('$1,000,000.84');
	});
});


describe('createFormatNumber', () => {
	

	it('Should be 1', () => {
		const customFormatNumber = createFormatNumber('en');
		expect(
			customFormatNumber(1.0, {
				maximumFractionDigits: 2,
			}),
		).toBe('1');
	});

	it('Should be 1 000 000', () => {
		const customFormatNumber = createFormatNumber('ru');
		expect(
			customFormatNumber(1000000),
		).toBe('1 000 000');
	});

	it('Format currency USD', () => {
		const customFormatNumber = createFormatNumber('en');
		expect(
			customFormatNumber(1000000.844, {
				currency: 'USD',
				maximumFractionDigits: 2,
				minimumFractionDigits: 0,
				style: 'currency',
			}),
		).toBe('$1,000,000.84');
	});
});