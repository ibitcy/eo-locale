import { FC } from 'react';

import { useTranslator } from '../utils/use_translator';

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
  return useTranslator(language).formatDate(value, options) as any;
};
