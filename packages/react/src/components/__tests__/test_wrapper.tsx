import { ErrorLogger } from '@eo-locale/core';
import * as React from 'react';

import { Provider } from '../provider';

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

interface IProps {
  language?: string;
  onError?: ErrorLogger;
}

export const TestWrapper: React.FC<IProps> = ({
  children,
  language,
  onError,
}) => {
  return (
    <span>
      <Provider
        language={language || 'en'}
        locales={locales}
        onError={onError}
      >
        {children}
      </Provider>
    </span>
  );
};
