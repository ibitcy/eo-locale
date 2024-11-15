import {
  ErrorLogger,
  FormatMessageOptions,
  getTranslationParts,
  Locale,
  TranslationError,
  Translator,
} from '@eo-locale/core';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
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

export const DateTime: FC<PropsWithChildren<DateTimeProps>> = ({
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

export const Numeric: FC<PropsWithChildren<NumericProps>> = ({
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
  tagName?: keyof React.ReactHTML;
  html?: boolean;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
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
