import { FormatMessageOptions } from '@eo-locale/core';
import { FunctionalComponent, h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { EOLocaleContext } from '../context';

export interface IEOLocaleTextProps extends FormatMessageOptions {
  id: string;
  html?: boolean;
}

export const EOLocaleText: FunctionalComponent<IEOLocaleTextProps> = ({
  children,
  html,
  id,
  ...values
}) => {
  const context = useContext(EOLocaleContext);
  const result = context.translator.translate(id, values);

  return html ? (
    <span dangerouslySetInnerHTML={{ __html: result }} />
  ) : (
    <Fragment>{result}</Fragment>
  );
};
