import { Translator } from '../translator';

const date = new Date(2017, 5, 24);

const enTranslator = new Translator();
const ruTranslator = new Translator('ru');

describe('formatDate', () => {
	it('Should format date for en', () => {
		expect(enTranslator.formatDate(date)).toBe('6/24/2017');
	});

	it('Should format date for ru', () => {
		expect(ruTranslator.formatDate(date)).toBe('24.06.2017');
	});

	it('Should format date for en', () => {
		expect(enTranslator.formatDate(date)).toBe('6/24/2017');
	});

	it('Should format date for en with options', () => {
		expect(
			enTranslator.formatDate(date, {
				year: '2-digit',
			}),
		).toBe('17');
	});

	it('Should format date for ru', () => {
		expect(ruTranslator.formatDate(date)).toBe('24.06.2017');
	});
});
