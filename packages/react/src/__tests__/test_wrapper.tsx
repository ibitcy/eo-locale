import { ErrorLogger } from '@eo-locale/core';
import React, { FC, PropsWithChildren } from 'react';

import { TranslationsProvider } from '../index';

const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello {name}!',
      test_plural:
        '{attempts, plural, one {You have one more attempt} other {You have {attempts} attempts}}',
      world: '<strong>world</strong>',
    },
  },
  {
    language: 'ru',
    messages: {
      hello: 'Привет {name}!',
      test_plural:
        '{confirmations, plural, one {{confirmations} подтверждение} few {{confirmations} подтверждения} many {{confirmations} подтверждений} other {{confirmations} подтверждений}}',
      world: '<strong>мир</strong>',
    },
  },
];

interface Props {
  language?: string;
  onError?: ErrorLogger;
}

export const TestWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  language,
  onError = jest.fn(),
}) => {
  return (
    <span data-testid='translation'>
      <TranslationsProvider
        language={language || 'en'}
        locales={locales}
        onError={onError}
      >
        {children}
      </TranslationsProvider>
    </span>
  );
};
