import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleProvider } from './components/provider';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';

export * from '@eo-locale/core';
export { useTranslator } from './utils/use_translator';

export const EOLocale = {
  Context: EOLocaleContext,
  Date: EOLocaleDate,
  Number: EOLocaleNumber,
  Provider: EOLocaleProvider,
  Text: EOLocaleText,
};
