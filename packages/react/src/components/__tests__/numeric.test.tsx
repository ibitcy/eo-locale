import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Numeric } from '../numeric';
import { TestWrapper } from './test_wrapper';

describe('Numeric', () => {
  it('Should render formatted number for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });

  it('Should render formatted number for ru', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1 000');
  });

  it('Should provide custom language in component', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Numeric value={1000} language="en" />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });

  it('Should update language', () => {
    const formatted = Enzyme.mount(
      <TestWrapper language="en">
        <Numeric value={1000} />
      </TestWrapper>,
    );

    formatted.setProps({
      language: 'ru',
    });

    expect(formatted.find('span').text()).toEqual('1 000');
  });
});
