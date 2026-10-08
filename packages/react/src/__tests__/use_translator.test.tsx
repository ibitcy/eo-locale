import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { useTranslator } from '../index';
import { TestWrapper } from './test_wrapper';

const Hello: React.FC<{ language?: string }> = ({ language }) => {
  return <>{useTranslator(language).translate('hello', { name: 'Bob' })}</>;
};

describe('useTranslator', () => {
  it('Should translate with context language', () => {
    render(
      <TestWrapper>
        <Hello />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('Hello Bob!');
  });

  it('Should translate with custom language using provider locales', () => {
    const onError = jest.fn();

    render(
      <TestWrapper onError={onError}>
        <Hello language='ru' />
      </TestWrapper>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('Привет Bob!');
    expect(onError).not.toHaveBeenCalled();
  });

  it('Should keep the same translator between renders', () => {
    const translators: unknown[] = [];
    const Probe = () => {
      translators.push(useTranslator());
      return null;
    };
    const { rerender } = render(
      <TestWrapper>
        <Probe />
      </TestWrapper>,
    );

    rerender(
      <TestWrapper>
        <Probe />
      </TestWrapper>,
    );

    expect(translators).toHaveLength(2);
    expect(translators[0]).toBe(translators[1]);
  });
});
