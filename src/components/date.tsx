import * as React from 'react';

import { useTranslator } from '../utils/use_translator';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
  value: Date;

  language?: string;
}

export const EOLocaleDate: React.FunctionComponent<IEOLocaleDateProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return useTranslator(language).formatDate(value, options) as any;
};
