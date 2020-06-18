import { FormatMessageOptions } from '@eo-locale/core';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Context } from '../context';

export interface TextProps extends FormatMessageOptions {
  id: string;

  html?: boolean;
  tagName?: keyof React.ReactHTML;
}

export const Text: React.FC<TextProps> = ({
  children,
  html,
  id,
  tagName = 'span',
  ...values
}) => {
  const context = React.useContext(Context);

  Object.keys(values).forEach((key) => {
    const value = values[key];

    if (React.isValidElement(value)) {
      values[key] = renderToStaticMarkup(
        <Context.Provider value={context}>
          {value}
        </Context.Provider>,
      );
    }
  });

  const result = context.translator.translate(id, values);

  if (html) {
    return React.createElement(tagName, {
      dangerouslySetInnerHTML: {
        __html: result,
      },
    });
  }

  return result as any;
};
