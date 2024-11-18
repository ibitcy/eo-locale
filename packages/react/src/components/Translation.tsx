import { FormatMessageOptions } from '@eo-locale/core';
import React, { createElement, FC, PropsWithChildren } from 'react';
import { useTranslator } from '../hooks';

interface Props extends FormatMessageOptions {
  defaultMessage?: string;
  html?: boolean;
  id: string;
  tagName?: keyof React.ReactHTML;
}

export const Translation: FC<PropsWithChildren<Props>> = ({
  children,
  defaultMessage,
  html,
  id,
  tagName = 'span',
  ...values
}) => {
  const translator = useTranslator();
  const result = translator.translate(id, defaultMessage, values);

  if (html) {
    return createElement(tagName, {
      dangerouslySetInnerHTML: {
        __html: result,
      },
    });
  }

  return result;
};
