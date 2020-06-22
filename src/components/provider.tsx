import { ErrorLogger, Locale, Translator } from '@eo-locale/core';
import * as React from 'react';

import { EOLocaleContext } from '../context';

export interface IEOLocaleProviderProps {
  language: string;
  locales: Locale[];

  onError?: ErrorLogger;
}

export const EOLocaleProvider: React.FC<IEOLocaleProviderProps> = ({
  children,
  language,
  locales,
  onError,
}) => {
  const stateHook = React.useState(language);

  React.useEffect(() => {
    stateHook[1](language);
  }, [language]);

  const translator = new Translator(stateHook[0], locales);

  if (onError) {
    translator.onError = onError;
  }

  return (
    <EOLocaleContext.Provider
      value={{
        language: stateHook[0],
        locales,
        setLanguage: stateHook[1],
        translator,
      }}
    >
      {children}
    </EOLocaleContext.Provider>
  );
};
