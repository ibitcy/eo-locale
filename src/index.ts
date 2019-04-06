import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleProvider } from './components/provider';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';

export { useTranslator } from './utils/use_translator';
export { Translator } from './utils/translator';

export const EOLocale = {
  Context: EOLocaleContext,
  Date: EOLocaleDate,
  Number: EOLocaleNumber,
  Provider: EOLocaleProvider,
  Text: EOLocaleText,
};
