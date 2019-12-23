import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleText } from '../text';
import { TestWrapper } from './test_wrapper';

describe('On id missing handler', () => {
  test('Should be called', () => {
    const onIdMissing = jest.fn();

    Enzyme.render(
      <TestWrapper onIdMissing={onIdMissing}>
        <EOLocaleText id="some_unique_id" attempts={1} />
      </TestWrapper>,
    );

    expect(onIdMissing).toBeCalledTimes(1);
  });
});
