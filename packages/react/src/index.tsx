import {
  ErrorLogger,
  FormatMessageOptions,
  getTranslationParts,
  Locale,
  Translator,
} from '@eo-locale/core';
import React, { FC } from 'react';

export interface TranslationsProviderProps {
  language: string;
  locales: Locale[];

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
      }}>
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

  language?: string;
}

export const DateTime: FC<DateTimeProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <React.Fragment>
      {useTranslator(language).formatDate(value, options)}
    </React.Fragment>
  );
};

export interface NumericProps extends Intl.NumberFormatOptions {
  value: number;

  language?: string;
}

export const Numeric: FC<NumericProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <React.Fragment>
      {useTranslator(language).formatNumber(value, options)}
    </React.Fragment>
  );
};

export interface TextProps extends FormatMessageOptions {
  id: string;

  html?: boolean;
}

export const Text: FC<TextProps> = ({
  children,
  html,
  id,
  ...values
}) => {
  const translator = useTranslator();
  const message = translator.getMessageById(id);

  if (typeof message === 'string') {
    try {
      const parts: any[] = getTranslationParts(
        translator.language,
        message,
        values,
      );

      parts.forEach((item, index) => {
        if (React.isValidElement(item)) {
          parts[index] = React.cloneElement(item, {
            key: index,
          });
          return;
        }

        if (html) {
          parts[index] = React.createElement('span', {
            dangerouslySetInnerHTML: {
              __html: item,
            },
            key: index,
          });
          return;
        }

        parts[index] = React.createElement(
          React.Fragment,
          {
            key: index,
          },
          item,
        );
      });

      return <React.Fragment>{parts}</React.Fragment>;
    } catch (error) {
      translator.onError(error);
    }
  }

  return <React.Fragment>{String(message)}</React.Fragment>;
};

export interface TranslationsContextProps {
  language: string;
  locales: Locale[];
  translator: Translator;

  setLanguage(language: string): void;
}

/* istanbul ignore next */
export const TranslationsContext = React.createContext<
  TranslationsContextProps
>({
  language: '',
  locales: [],
  setLanguage: () => {},
  translator: new Translator(),
});
