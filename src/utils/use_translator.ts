import * as React from 'react';

import { EOLocaleContext } from '../context';
import { Translator } from './translator';

export function useTranslator(language?: string) {
  const context = React.useContext(EOLocaleContext);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}
