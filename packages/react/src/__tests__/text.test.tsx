import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { Numeric, Text } from '../index';
import { TestWrapper } from './test_wrapper';

describe('Text', () => {
  it('Should render formatted message for en', () => {
    render(
      <TestWrapper>
        <Text id="hello" name="test" />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('Hello test!');
  });

  it('Should render default message', () => {
    render(
      <TestWrapper>
        <Text id="none" defaultMessage="test" />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('test');
  });

  it('Should render formatted message for en', () => {
    render(
      <TestWrapper>
        <Text id="hello" name={<Numeric value={1000} />} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('Hello 1,000!');
  });

  it('Should render formatted message for ru', () => {
    render(
      <TestWrapper language="ru">
        <Text id="hello" name="тест" />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('Привет тест!');
  });

  it('Should render id for unsupported language', () => {
    const onError = jest.fn();

    render(
      <TestWrapper language="es" onError={onError}>
        <Text id="hello" />
      </TestWrapper>,
    );

    expect(onError).toBeCalledTimes(1);
    expect(screen.getByTestId('translation')).toHaveTextContent('hello');
  });

  it('Should render plural', () => {
    render(
      <TestWrapper>
        <Text id="test_plural" attempts={1} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('You have one more attempt');
  });

  it('Should render plural', () => {
    render(
      <TestWrapper>
        <Text id="test_plural" attempts={5} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('You have 5 attempts');
  });

  it('Should render rus plural', () => {
    render(
      <TestWrapper language="ru">
        <Text id="test_plural" confirmations={3} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('3 подтверждения');
  });

  it('Should render rus plural', () => {
    render(
      <TestWrapper language="ru">
        <Text id="test_plural" confirmations={1} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('1 подтверждение');
  });
});
