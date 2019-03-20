import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleTranslation } from './components/trans';
import { EOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';

export { Translator } from './utils/translator';

export const EOLocale = {
	Context: EOLocaleContext,
	Date: EOLocaleDate,
	Number: EOLocaleNumber,
	Provider: EOLocaleProvider,
	Trans: EOLocaleTranslation,
};
