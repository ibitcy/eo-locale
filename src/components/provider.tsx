import { ILocale, Translator } from '@eo-locale/core';
import * as React from 'react';

import { EOLocaleContext } from '../context';

export interface IEOLocaleProviderProps {
  language: string;
  locales: ILocale[];
}

export const EOLocaleProvider: React.FunctionComponent<
  IEOLocaleProviderProps
> = ({ children, language, locales }) => {
  const stateHook = React.useState(language);

  React.useEffect(() => {
    stateHook[1](language);
  }, [language]);

  return (
    <EOLocaleContext.Provider
      value={{
        language: stateHook[0],
        locales,
        setLanguage: stateHook[1],
        translator: new Translator(stateHook[0], locales),
      }}
    >
      {children}
    </EOLocaleContext.Provider>
  );
};
