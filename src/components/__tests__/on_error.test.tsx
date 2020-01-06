import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleText } from '../text';
import { TestWrapper } from './test_wrapper';

describe('On error handler', () => {
  test('Should be called', () => {
    const onError = jest.fn();

    Enzyme.render(
      <TestWrapper onError={onError}>
        <EOLocaleText id="some_unique_id" />
      </TestWrapper>,
    );

    expect(onError).toBeCalledTimes(1);
  });
});
