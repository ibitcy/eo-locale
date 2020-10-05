import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';

export * from '@eo-locale/core';

export const EOLocale = {
  Context: EOLocaleContext,
  Date: EOLocaleDate,
  Number: EOLocaleNumber,
  Provider: EOLocaleProvider,
  Text: EOLocaleText,
};
