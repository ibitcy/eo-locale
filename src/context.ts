import { ILocale, Translator } from '@eo-locale/core';
import * as React from 'react';

export interface IEOLocaleContext {
  language: string;
  locales: ILocale[];
  translator: Translator;

  setLanguage(language: string): void;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
  {
    language: '',
    locales: [],
    // tslint:disable-next-line:no-empty
    setLanguage: () => {},
    translator: new Translator(),
  },
  (prev, next) => (prev.language !== next.language ? 1 : 0),
);
