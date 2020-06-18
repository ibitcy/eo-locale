import { Translator } from '@eo-locale/core';
import * as React from 'react';

import { Context } from '../context';

export function useTranslator(language?: string) {
  const context = React.useContext(Context);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}
