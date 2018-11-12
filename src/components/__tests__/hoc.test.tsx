import * as Enzyme from 'enzyme';
import * as React from 'react';

import { TestWrapper } from './test_wrapper';
import { TestHoc } from './test_hoc';

describe('withLocale', () => {
	it('Should render strong tag', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);

		const strong = formatted.find('strong');

		expect(strong.length).toEqual(1);
	});
});
