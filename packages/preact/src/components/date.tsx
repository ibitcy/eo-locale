import { Translator } from '@eo-locale/core';
import { FunctionalComponent, h, Fragment } from 'preact';
import { EOLocaleContext } from '../context';
import { useContext } from 'preact/hooks';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
  value: Date;
  language?: string;
}

export const EOLocaleDate: FunctionalComponent<IEOLocaleDateProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  const context = useContext(EOLocaleContext);

  return (
    <Fragment>
      {language && language !== context.language
        ? new Translator(language).formatDate(value, options)
        : context.translator.formatDate(value, options)}
    </Fragment>
  );
};
