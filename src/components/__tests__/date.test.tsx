import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleDate } from '../date';
import { TestWrapper } from './test_wrapper';

const date = new Date(2017, 5, 24);

describe('EOLocaleDate', () => {
	it('Should render date for en', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleDate value={date} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('6/24/2017');
	});

	it('Should render date for ru', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleDate value={date} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('24.06.2017');
	});

	it('Should provide custom language in component', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleDate value={date} language="en" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('6/24/2017');
	});
});
