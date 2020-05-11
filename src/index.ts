import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleProvider } from './components/provider';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';

export * from '@eo-locale/core';
export { IEOLocaleTextProps } from './components/text';
export { IEOLocaleDateProps } from './components/date';
export { IEOLocaleNumberProps } from './components/number';
export { IEOLocaleProviderProps } from './components/provider';
export { IEOLocaleContext } from './context';

export { useTranslator } from './utils/use_translator';

export const EOLocale = {
  Context: EOLocaleContext,
  Date: EOLocaleDate,
  Number: EOLocaleNumber,
  Provider: EOLocaleProvider,
  Text: EOLocaleText,
};
