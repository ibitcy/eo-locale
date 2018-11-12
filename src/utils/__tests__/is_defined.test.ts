import { isDefined } from '../index';

describe('isDefined', () => {
	it('Should return true', () => {
		expect(isDefined(0)).toBeTruthy();
	});

	it('Should return true', () => {
		expect(isDefined('')).toBeTruthy();
	});

	it('Should return true', () => {
		expect(isDefined(false)).toBeTruthy();
	});

	it('Should return false', () => {
		expect(isDefined(null)).toBeFalsy();
	});

	it('Should return false', () => {
		expect(isDefined(undefined)).toBeFalsy();
	});
});
