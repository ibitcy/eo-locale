import { ErrorLogger, Locale, Translator } from '@eo-locale/core';
import React, { FC, PropsWithChildren, useState } from 'react';
import { TranslationsContext } from '../model';

interface Props {
  defaultLanguage: string;
  locales: Locale[];
  onError?: ErrorLogger;
}

export const TranslationsProvider: FC<PropsWithChildren<Props>> = ({
  children,
  defaultLanguage,
  locales,
  onError,
}) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const translator = new Translator(language, locales);

  if (onError) {
    translator.onError = onError;
  }

  return (
    <TranslationsContext.Provider
      value={{
        language,
        locales,
        setLanguage,
        translator,
      }}>
      {children}
    </TranslationsContext.Provider>
  );
};
