import { ETokenType, tokenStream } from '../token_stream';

describe('TokenStream', () => {
	it('Should return text token', () => {
		const stream = tokenStream('abc');

		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'abc',
		});
		expect(stream.next().done).toBeTruthy();
	});

	it('Should return punc token', () => {
		const stream = tokenStream('{');

		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().done).toBeTruthy();
	});

	it('Should return punc token', () => {
		const stream = tokenStream('}');

		expect(stream.next().value).toEqual({
			type: ETokenType.Close,
			value: '}',
		});
		expect(stream.next().done).toBeTruthy();
	});

	it('Should return many tokens', () => {
		const stream = tokenStream('You, have {count, plural,, one {{count} item , }');

		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'You, have ',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'count',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Comma,
			value: ',',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: ' plural',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Comma,
			value: ',',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Comma,
			value: ',',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: ' one ',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'count',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Close,
			value: '}',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: ' item , ',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Close,
			value: '}',
		});
	});

	it('Should return punc token', () => {
		const stream = tokenStream(
			'{attempts, plural, one {You have one more attempt} other {You have {attempts} attempts}}',
		);

		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'attempts',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Comma,
			value: ',',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: ' plural',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Comma,
			value: ',',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: ' one ',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Open,
			value: '{',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Text,
			value: 'You have one more attempt',
		});
		expect(stream.next().value).toEqual({
			type: ETokenType.Close,
			value: '}',
		});
	});
});
