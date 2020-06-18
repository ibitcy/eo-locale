import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Numeric } from '../numeric';
import { Text } from '../text';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleHtml', () => {
  it('Should wrap in span by default', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text html id="world" />
      </TestWrapper>,
    );

    const span = formatted.find('span');

    expect(span.length).toEqual(1);
  });

  it('Should wrap in custom tag', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text html id="world" tagName="article" />
      </TestWrapper>,
    );

    const article = formatted.find('article');

    expect(article.length).toEqual(1);
  });
  
  it('Should render strong tag', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text html id="world" />
      </TestWrapper>,
    );

    const strong = formatted.find('strong');

    expect(strong.length).toEqual(1);
  });

  it('Should render expected text in the strong tag', () => {
    const formatted = Enzyme.render(
      <TestWrapper language="ru">
        <Text html id="world" />
      </TestWrapper>,
    );

    const strong = formatted.find('strong');

    expect(strong.text()).toEqual('мир');
  });

  it('Should render formatted message for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Text html id="hello" name={<Numeric value={1000} />} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('Hello 1,000!');
  });
});
