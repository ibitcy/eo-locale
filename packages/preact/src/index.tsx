import {
  ErrorLogger,
  FormatMessageOptions,
  getTranslationParts,
  Locale,
  Translator,
} from '@eo-locale/core';
import { h, createContext, FunctionalComponent, Fragment } from 'preact';
import { useState, useContext, useEffect } from 'preact/hooks';

export interface TranslationsContextProps {
  language: string;
  locales: Locale[];
  translator: Translator;

  setLanguage(language: string): void;
}

export const TranslationsContext = createContext<TranslationsContextProps>({
  language: '',
  locales: [],
  setLanguage: () => {},
  translator: new Translator(),
});

export interface TranslationsProviderProps {
  language: string;
  locales: Locale[];

  onError?: ErrorLogger;
}

export const TranslationsProvider: FunctionalComponent<TranslationsProviderProps> = ({
  children,
  language,
  locales,
  onError,
}) => {
  const stateHook = useState(language);

  useEffect(() => {
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
      }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export function useTranslator(language?: string) {
  const context = useContext(TranslationsContext);

  if (language && language !== context.language) {
    return new Translator(language);
  }

  return context.translator;
}

export interface DateTimeProps extends Intl.DateTimeFormatOptions {
  value: Date;

  language?: string;
}

export const DateTime: FunctionalComponent<DateTimeProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <Fragment>{useTranslator(language).formatDate(value, options)}</Fragment>
  );
};

export interface NumericProps extends Intl.NumberFormatOptions {
  value: number;

  language?: string;
}

export const Numeric: FunctionalComponent<NumericProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <Fragment>{useTranslator(language).formatNumber(value, options)}</Fragment>
  );
};

export interface TextProps extends FormatMessageOptions {
  id: string;

  tagName?: string;
  html?: boolean;
}

export const Text: FunctionalComponent<TextProps> = ({
  children,
  html,
  id,
  tagName = 'span',
  ...values
}) => {
  const context = useContext(TranslationsContext);
  const result = context.translator.translate(id, values);

  if (html) {
    return h(tagName, {
      dangerouslySetInnerHTML: {
        __html: result,
      },
    });
  }

  return <Fragment>{result}</Fragment>;
};
