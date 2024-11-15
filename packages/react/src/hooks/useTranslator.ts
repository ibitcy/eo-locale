import { Translator } from '@eo-locale/core';
import { useContext } from 'react';
import { TranslationsContext } from '../model';

export function useTranslator(language?: string) {
  const context = useContext(TranslationsContext);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}
