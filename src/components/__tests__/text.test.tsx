import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleText } from '../text';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleText', () => {
	it('Should render formatted message for en', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleText id="hello" name="test" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Hello test!');
	});

	it('Should render formatted message for ru', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleText id="hello" name="тест" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Привет тест!');
	});

	it('Should render id for unsupported language', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="es">
				<EOLocaleText id="hello" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('hello');
	});

	it('Should editable mode is accepted', () => {
		const formatted = Enzyme.render(
			<TestWrapper isEditable>
				<EOLocaleText id="hello" />
			</TestWrapper>,
		);

		const span = formatted.find('span');

		expect(span.attr('data-key')).toEqual('hello');
	});
});
