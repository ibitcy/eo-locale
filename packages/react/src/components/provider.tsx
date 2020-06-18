import { ErrorLogger, ILocale, Translator } from '@eo-locale/core';
import React from 'react';

import { Context } from '../context';

export interface ProviderProps {
  language: string;
  locales: ILocale[];

  onError?: ErrorLogger;
}

export const Provider: React.FC<ProviderProps> = ({
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
    <Context.Provider
      value={{
        language: stateHook[0],
        locales,
        setLanguage: stateHook[1],
        translator,
      }}
    >
      {children}
    </Context.Provider>
  );
};
