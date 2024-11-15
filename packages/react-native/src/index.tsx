import {
  Locale,
  Translator,
  ErrorLogger,
  FormatMessageOptions,
} from '@eo-locale/core';
import React, { FC, ReactNode } from 'react';

export interface TranslationsProviderProps {
  language: string;
  locales: Locale[];
  children?: ReactNode;
  onError?: ErrorLogger;
}

export const TranslationsProvider: FC<TranslationsProviderProps> = ({
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
    <TranslationsContext.Provider
      value={{
        language: stateHook[0],
        locales,
        setLanguage: stateHook[1],
        translator,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

export function useTranslator(language?: string) {
  const context = React.useContext(TranslationsContext);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}

export interface DateTimeProps extends Intl.DateTimeFormatOptions {
  value: Date;
  children?: ReactNode;
  language?: string;
}

export const DateTime: FC<DateTimeProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return useTranslator(language).formatDate(value, options) as any;
};

export interface NumericProps extends Intl.NumberFormatOptions {
  value: number;
  children?: ReactNode;
  language?: string;
}

export const Numeric: FC<NumericProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return useTranslator(language).formatNumber(value, options) as any;
};

export interface TranslationProps extends FormatMessageOptions {
  id: string;
}

export const Translation: FC<TranslationProps> = ({
  children,
  id,
  ...values
}) => {
  return useTranslator().translate(id, values) as any;
};

export interface TranslationsContextProps {
  language: string;
  locales: Locale[];
  translator: Translator;

  setLanguage(language: string): void;
}

/* istanbul ignore next */
export const TranslationsContext =
  React.createContext<TranslationsContextProps>({
    language: '',
    locales: [],
    setLanguage: () => {},
    translator: new Translator(),
  });
