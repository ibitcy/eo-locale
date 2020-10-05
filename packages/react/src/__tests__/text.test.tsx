import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Numeric, Text } from '../index';
import { TestWrapper } from './test_wrapper';

describe('Text', () => {
  it('Should render formatted message for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text id="hello" name="test" />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('Hello test!');
  });

  it('Should render default message', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text id="none" defaultMessage="test" />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('test');
  });

  it('Should render formatted message for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text id="hello" name={<Numeric value={1000} />} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('Hello 1,000!');
  });

  it('Should render formatted message for ru', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Text id="hello" name="тест" />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('Привет тест!');
  });

  it('Should render id for unsupported language', () => {
    const onError = jest.fn();

    const formatted = Enzyme.render(
      <TestWrapper language="es" onError={onError}>
        <Text id="hello" />
      </TestWrapper>,
    );

    expect(onError).toBeCalledTimes(1);
    expect(formatted.text()).toEqual('hello');
  });

  it('Should render plural', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text id="test_plural" attempts={1} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('You have one more attempt');
  });

  it('Should render plural', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text id="test_plural" attempts={5} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('You have 5 attempts');
  });

  it('Should render rus plural', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Text id="test_plural" confirmations={3} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('3 подтверждения');
  });

  it('Should render rus plural', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Text id="test_plural" confirmations={1} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1 подтверждение');
  });
});
