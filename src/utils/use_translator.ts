import { Translator } from '@eo-locale/core';
import * as React from 'react';

import { EOLocaleContext } from '../context';

export function useTranslator(language?: string) {
  const context = React.useContext(EOLocaleContext);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}
