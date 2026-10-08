import {
  ErrorLogger,
  FormatMessageOptions,
  getTranslationParts,
  Locale,
  TranslationError,
  Translator,
} from '@eo-locale/core';
import React, { FC, ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

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

  const translator = React.useMemo(
    () => new Translator(stateHook[0], locales),
    [stateHook[0], locales],
  );

  translator.onError = onError || console.error;

  const value = React.useMemo(
    () => ({
      language: stateHook[0],
      locales,
      setLanguage: stateHook[1],
      translator,
    }),
    [stateHook[0], locales, translator],
  );

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
};

export function useTranslator(language?: string) {
  const context = React.useContext(TranslationsContext);

  const translator = React.useMemo(() => {
    if (!language || language === context.language) {
      return context.translator;
    }

    return new Translator(language, context.locales);
  }, [language, context.language, context.locales, context.translator]);

  translator.onError = context.translator.onError;

  return translator;
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
  return (
    <React.Fragment>
      {useTranslator(language).formatDate(value, options)}
    </React.Fragment>
  );
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
  return (
    <React.Fragment>
      {useTranslator(language).formatNumber(value, options)}
    </React.Fragment>
  );
};

export interface TextProps extends FormatMessageOptions {
  id: string;
  tagName?: string;
  html?: boolean;
  children?: ReactNode;
}

export const Text: FC<TextProps> = ({
  children,
  defaultMessage,
  html,
  id,
  tagName = 'span',
  ...values
}) => {
  const translator = useTranslator();
  const message = translator.getMessageById(id, defaultMessage);

  if (typeof message === 'string') {
    try {
      const parts: React.ReactNode[] = getTranslationParts(
        translator.language,
        message,
        values,
      ).map((part, index) => {
        if (React.isValidElement(part)) {
          if (html) {
            return renderToStaticMarkup(part);
          }

          return React.cloneElement(part, {
            key: index,
          });
        }

        if (html) {
          return part;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      });

      if (html) {
        return React.createElement(tagName, {
          dangerouslySetInnerHTML: {
            __html: parts.join(''),
          },
        });
      }

      return <React.Fragment>{parts}</React.Fragment>;
    } catch (error) {
      translator.onError(new TranslationError(id, translator.language));
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
export const TranslationsContext =
  React.createContext<TranslationsContextProps>({
    language: '',
    locales: [],
    setLanguage: () => {},
    translator: new Translator(),
  });
