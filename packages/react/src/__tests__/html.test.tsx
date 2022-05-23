import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Numeric, Text } from '../index';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleHtml', () => {
  it('Should wrap in span by default', () => {
    render(
      <TestWrapper>
        <Text html id='world' />
      </TestWrapper>,
    );

    const translation = screen.getByTestId('translation');

    expect(translation.querySelectorAll('span').length).toEqual(1);
  });

  it('Should wrap in custom tag', () => {
    const { container } = render(
      <TestWrapper>
        <Text html id='world' tagName='article' />
      </TestWrapper>,
    );

    expect(container.querySelectorAll('article').length).toEqual(1);
  });

  it('Should render strong tag', () => {
    const { container } = render(
      <TestWrapper>
        <Text html id='world' />
      </TestWrapper>,
    );

    expect(container.querySelectorAll('strong').length).toEqual(1);
  });

  it('Should render expected text in the strong tag', () => {
    const { container } = render(
      <TestWrapper language='ru'>
        <Text html id='world' />
      </TestWrapper>,
    );

    const strong = container.querySelector('strong');

    expect(strong?.textContent).toEqual('мир');
  });

  it('Should render formatted message for en', () => {
    const { container } = render(
      <TestWrapper>
        <Text html id='hello' name={<Numeric value={1000} />} />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')?.textContent).toEqual(
      'Hello 1,000!',
    );
  });
});
