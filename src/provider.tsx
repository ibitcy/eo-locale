import * as React from 'react';

import { EOLocaleContext, IEOLocaleContext } from './context';
import { ILocale, TMessage } from './models';
import { convertObjectToMap, createFormatDate, createFormatNumber, createMessageFormatter } from './utils';

export interface IEOLocaleProviderProps {
	language: string;
	locales: ILocale[];
}

export const EOLocaleProvider: React.FunctionComponent<IEOLocaleProviderProps> = props => {
	const { children, language, locales } = props;
	const currentLocale = locales.find(locale => locale.language === language);
	let messages = new Map();

	if (!currentLocale) {
		console.error('[eo-locale] Unsupported language', props.language);
	} else {
		messages = convertObjectToMap<TMessage>(currentLocale.messages);
	}

	const contextValue: IEOLocaleContext = {
		formatDate: createFormatDate(language),
		formatMessage: createMessageFormatter(language, messages),
		formatNumber: createFormatNumber(language),
		language,
		locales,
		messages,
	};

	return <EOLocaleContext.Provider value={contextValue}>{children}</EOLocaleContext.Provider>;
};
