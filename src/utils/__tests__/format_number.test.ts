import { formatNumber } from '..';

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

	it('No round mode', () => {
		expect(
			formatNumber(0.989, {
				language: 'ru',
				maximumFractionDigits: 2,
				noRound: true,
			}),
		).toBe('0,98');
	});
});
