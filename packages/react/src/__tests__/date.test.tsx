import { render } from '@testing-library/react';
import * as React from 'react';
import { DateTime } from '../components';
import { TestWrapper } from './test_wrapper';

const date = new Date(2017, 5, 24);

describe('DateTime', () => {
  it('Should render date for en', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <DateTime value={date} />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('6/24/2017');
  });

  it('Should render date for ru', () => {
    const { getByTestId } = render(
      <TestWrapper language='ru'>
        <DateTime value={date} />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('24.06.2017');
  });

  it('Should provide custom language in component', () => {
    const { getByTestId } = render(
      <TestWrapper language='ru'>
        <DateTime value={date} language='en' />
      </TestWrapper>,
    );

    expect(getByTestId('translation')).toHaveTextContent('6/24/2017');
  });
});
