import { EOLocaleDate } from './components/date';
import { EOLocaleHtml } from './components/html';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';

export { createMessageFormatter } from './utils';
export { formatDate } from './utils';
export { formatNumber } from './utils';

export const EOLocale = {
	Context: EOLocaleContext,
	Date: EOLocaleDate,
	Html: EOLocaleHtml,
	Number: EOLocaleNumber,
	Provider: EOLocaleProvider,
	Text: EOLocaleText,
};
