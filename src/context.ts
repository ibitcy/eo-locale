import { ILocale, Translator } from '@eo-locale/core';
import * as React from 'react';

export interface IEOLocaleContext {
  language: string;
  locales: ILocale[];
  translator: Translator;

  onIdMissing?(id: string): void;
  setLanguage(language: string): void;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
  {
    language: '',
    locales: [],
    setLanguage: () => {}, // tslint:disable-line:no-empty
    translator: new Translator(),
  },
  (prev, next) => (prev.language !== next.language ? 1 : 0),
);
