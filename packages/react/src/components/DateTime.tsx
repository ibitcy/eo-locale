import React, { FC, Fragment, PropsWithChildren } from 'react';
import { useTranslator } from '../hooks';

interface Props extends Intl.DateTimeFormatOptions {
  value: Date;
  language?: string;
}

export const DateTime: FC<PropsWithChildren<Props>> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <Fragment>{useTranslator(language).formatDate(value, options)}</Fragment>
  );
};
