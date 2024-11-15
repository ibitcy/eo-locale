import { render } from '@testing-library/react';
import * as React from 'react';
import { Text } from '../components';
import { TestWrapper } from './test_wrapper';

describe('On error handler', () => {
  test('Should be called', () => {
    const onError = jest.fn();

    render(
      <TestWrapper onError={onError}>
        <Text id='some_unique_id' />
      </TestWrapper>,
    );

    expect(onError).toBeCalledTimes(1);
  });
});
