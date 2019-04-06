import * as React from 'react';

import { ILocale } from './models';
import { Translator } from './utils/translator';

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
