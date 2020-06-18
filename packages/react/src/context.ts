import { ILocale, Translator } from '@eo-locale/core';
import React from 'react';

export interface Context {
  language: string;
  locales: ILocale[];
  translator: Translator;

  setLanguage(language: string): void;
}

export const Context = React.createContext<Context>(
  {
    language: '',
    locales: [],
    setLanguage: () => {},
    translator: new Translator(),
  },
  (prev, next) => (prev.language !== next.language ? 1 : 0),
);
