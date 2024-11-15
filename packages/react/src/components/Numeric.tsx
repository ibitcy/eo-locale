import React, { FC, Fragment, PropsWithChildren } from 'react';
import { useTranslator } from '../hooks';

interface Props extends Intl.NumberFormatOptions {
  value: number;
  language?: string;
}

export const Numeric: FC<PropsWithChildren<Props>> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <Fragment>{useTranslator(language).formatNumber(value, options)}</Fragment>
  );
};
