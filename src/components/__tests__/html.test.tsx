import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleHtml } from '../html';
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


	it('Should editable mode is accepted', () => {
		const formatted = Enzyme.render(
			<TestWrapper isEditable>
				<EOLocaleHtml id="hello" />
			</TestWrapper>,
		);

		const span = formatted.find('span');

		expect(span.attr('data-key')).toEqual('hello');
	});
});
