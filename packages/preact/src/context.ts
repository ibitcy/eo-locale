import { Locale, Translator } from '@eo-locale/core';
import { createContext } from 'preact';

export interface IEOLocaleContext {
  language: string;
  locales: Locale[];
  translator: Translator;
}

export const EOLocaleContext = createContext<IEOLocaleContext>({
  language: '',
  locales: [],
  translator: new Translator(),
});
