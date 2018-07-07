import { formatDate } from '..';

const date = new Date(2017, 5, 24);

describe('formatDate', () => {
	it('Should format date for en', () => {
		expect(
			formatDate(date, {
				language: 'en',
			}),
		).toBe('6/24/2017');
	});

	it('Should format date for ru', () => {
		expect(
			formatDate(date, {
				language: 'ru',
			}),
		).toBe('24.06.2017');
	});
});
