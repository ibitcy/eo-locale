import {
  FormatMessageOptions,
  getTranslationParts,
  TranslationError,
} from '@eo-locale/core';
import React, { FC, Fragment, PropsWithChildren } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslator } from '../hooks';

interface Props extends FormatMessageOptions {
  id: string;
  tagName?: keyof React.ReactHTML;
  html?: boolean;
}

export const Text: FC<PropsWithChildren<Props>> = ({
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

        return <Fragment key={index}>{part}</Fragment>;
      });

      if (html) {
        return React.createElement(tagName, {
          dangerouslySetInnerHTML: {
            __html: parts.join(''),
          },
        });
      }

      return <Fragment>{parts}</Fragment>;
    } catch (error) {
      translator.onError(new TranslationError(id, translator.language));
    }
  }

  return <Fragment>{String(message)}</Fragment>;
};
