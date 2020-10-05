import { Translator } from '@eo-locale/core';
import { FunctionalComponent, h, Fragment } from 'preact';
import { EOLocaleContext } from '../context';
import { useContext } from 'preact/hooks';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
  value: number;
  language?: string;
}

export const EOLocaleNumber: FunctionalComponent<IEOLocaleNumberProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  const context = useContext(EOLocaleContext);

  return (
    <Fragment>
      {language && language !== context.language
        ? new Translator(language).formatNumber(value, options)
        : context.translator.formatNumber(value, options)}
    </Fragment>
  );
};
