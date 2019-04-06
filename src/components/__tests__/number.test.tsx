import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleNumber } from '../number';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleNumber', () => {
  it('Should render formatted number for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <EOLocaleNumber value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });

  it('Should render formatted number for ru', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <EOLocaleNumber value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1 000');
  });

  it('Should provide custom language in component', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <EOLocaleNumber value={1000} language="en" />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });
});
