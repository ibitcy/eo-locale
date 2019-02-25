import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleHtml } from '../html';
import { EOLocaleNumber } from '../number';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleHtml', () => {
	it('Should render strong tag', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleHtml id="world" />
			</TestWrapper>,
		);

		const strong = formatted.find('strong');

		expect(strong.length).toEqual(1);
	});

	it('Should render expected text in the strong tag', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleHtml id="world" />
			</TestWrapper>,
		);

		const strong = formatted.find('strong');

		expect(strong.text()).toEqual('мир');
	});

	it('Should render formatted message for en', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleHtml id="hello" name={<EOLocaleNumber value={1000} />} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Hello 1,000!');
	});
});
