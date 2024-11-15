import { Locale, Translator } from '@eo-locale/core';
import { createContext } from 'react';

interface TranslationsContextValue {
  language: string;
  locales: Locale[];
  translator: Translator;

  setLanguage(language: string): void;
}

/* istanbul ignore next */
export const TranslationsContext = createContext<TranslationsContextValue>({
  language: '',
  locales: [],
  setLanguage: () => {},
  translator: new Translator(),
});
