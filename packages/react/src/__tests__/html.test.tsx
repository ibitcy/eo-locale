import { render } from '@testing-library/react';
import * as React from 'react';
import { Translation } from '../components';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleHtml', () => {
  it('Should wrap in span by default', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Translation html id='world' />
      </TestWrapper>,
    );

    const translation = getByTestId('translation');

    expect(translation.querySelectorAll('span').length).toEqual(1);
  });

  it('Should wrap in custom tag', () => {
    const { container } = render(
      <TestWrapper>
        <Translation html id='world' tagName='article' />
      </TestWrapper>,
    );

    expect(container.querySelectorAll('article').length).toEqual(1);
  });

  it('Should render strong tag', () => {
    const { container } = render(
      <TestWrapper>
        <Translation html id='world' />
      </TestWrapper>,
    );

    expect(container.querySelectorAll('strong').length).toEqual(1);
  });

  it('Should render expected text in the strong tag', () => {
    const { container } = render(
      <TestWrapper language='ru'>
        <Translation html id='world' />
      </TestWrapper>,
    );

    const strong = container.querySelector('strong');

    expect(strong?.textContent).toEqual('мир');
  });
});
