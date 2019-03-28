import { ETokenType, TokenStream } from '../token_stream';

describe('TokenStream', () => {
	it('Should return tokens', () => {
		const stream = new TokenStream('Hello {name}!');

		expect(stream.next()).toEqual({
			type: ETokenType.Text,
			value: 'Hello ',
		});
		expect(stream.next()).toEqual({
			type: ETokenType.Variable,
			value: 'name',
		});
		expect(stream.next()).toEqual({
			type: ETokenType.Text,
			value: '!',
		});
		expect(stream.done).toBeTruthy();
	});

	it('Should return plural token', () => {
		const stream = new TokenStream('{count, plural, one {One, item} other {{count} ite,ms}}');
		const options = new Map();

		options.set('one', [{
			type: ETokenType.Text,
			value: 'One, item',
		}]);

		options.set('other', [{
			type: ETokenType.Variable,
			value: 'count',
		},{
			type: ETokenType.Text,
			value: ' ite,ms',
		}])

		expect(stream.next()).toEqual({
			options,
			type: ETokenType.Plural,
			value: 'count',
		});
		expect(stream.done).toBeTruthy();
	});

});
