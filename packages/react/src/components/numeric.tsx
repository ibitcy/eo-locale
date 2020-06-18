import React from 'react';

import { useTranslator } from '../utils/use_translator';

export interface NumericProps extends Intl.NumberFormatOptions {
  value: number;

  language?: string;
}

export const Numeric: React.FC<NumericProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return useTranslator(language).formatNumber(value, options) as any;
};
