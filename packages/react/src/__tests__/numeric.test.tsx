import { render } from '@testing-library/react';
import * as React from 'react';
import { Numeric } from '../components';
import { TestWrapper } from './test_wrapper';

describe('Numeric', () => {
  it('Should render formatted number for en', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('1,000');
  });

  it('Should render formatted number for ru', () => {
    const { getByTestId } = render(
      <TestWrapper language='ru'>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('1 000');
  });

  it('Should provide custom language in component', () => {
    const { getByTestId } = render(
      <TestWrapper language='ru'>
        <Numeric value={1000} language='en' />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('1,000');
  });
});
