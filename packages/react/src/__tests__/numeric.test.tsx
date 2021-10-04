import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Numeric } from '../index';
import { TestWrapper } from './test_wrapper';

describe('Numeric', () => {
  it('Should render formatted number for en', () => {
    render(
      <TestWrapper>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('1,000');
  });

  it('Should render formatted number for ru', () => {
    render(
      <TestWrapper language='ru'>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('1 000');
  });

  it('Should provide custom language in component', () => {
    render(
      <TestWrapper language='ru'>
        <Numeric value={1000} language='en' />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('1,000');
  });

  it('Should update language', () => {
    const { rerender } = render(
      <TestWrapper language='en'>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    rerender(
      <TestWrapper language='ru'>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('1 000');
  });
});
