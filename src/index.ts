import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';

export { useTranslator } from './utils/use_translator';
export { Translator } from './utils/translator';

export const EOLocale = {
	Context: EOLocaleContext,
	Date: EOLocaleDate,
	Number: EOLocaleNumber,
	Provider: EOLocaleProvider,
	Text: EOLocaleText,
};
