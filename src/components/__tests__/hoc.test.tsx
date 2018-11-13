import * as Enzyme from 'enzyme';
import * as React from 'react';

import { TestHoc } from './test_hoc';
import { TestWrapper } from './test_wrapper';

describe('withLocale', () => {
	it('Should render current language passed to props', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#language').text()).toEqual('en');

		formatted.setProps({ language: 'ru' });
		expect(formatted.find('#language').text()).toEqual('ru');
	});

	it('Should render message', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#message').text()).toContain('world');

		formatted.setProps({ language: 'ru' });
		expect(formatted.find('#message').text()).toContain('мир');
	});

	it('Should render right message based on id', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper language="ru">
				<TestHoc id="hello" name="tester" />
			</TestWrapper>,
		);
		expect(formatted.find('#message').text()).toEqual('Привет tester!');
	});

	it('Should render formatted number', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#number').text()).toEqual('$10.84');

		formatted.setProps({ language: 'ru' });
		expect(formatted.find('#number').text()).toEqual('10,84 $');
	});

	it('Should render formatted date', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#date').text()).toEqual('Jun 24, 2017');

		formatted.setProps({ language: 'ru' });
		expect(formatted.find('#date').text()).toEqual('24 июн. 2017 г.');
	});
});
