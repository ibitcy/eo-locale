import { convertObjectToMap } from '../index';

describe('convertObjectToMap', () => {
	it('Should return map', () => {
		const map = convertObjectToMap({ a: 1, b: 'test' });

		expect(Array.from(map)).toEqual([['a', 1], ['b', 'test']]);
	});
});
