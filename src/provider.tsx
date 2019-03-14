import * as React from 'react';

import { EOLocaleContext, IEOLocaleContext } from './context';
import { ILocale } from './models';
import { Translator } from './utils/translator';

export interface IEOLocaleProviderProps {
	language: string;
	locales: ILocale[];
}

export const EOLocaleProvider: React.FunctionComponent<IEOLocaleProviderProps> = props => {
	const { children, language, locales } = props;

	const contextValue: IEOLocaleContext = {
		language,
		locales,
		translator: new Translator({ language, locales }),
	};

	return <EOLocaleContext.Provider value={contextValue}>{children}</EOLocaleContext.Provider>;
};
