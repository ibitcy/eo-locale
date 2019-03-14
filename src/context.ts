import * as React from 'react';

import { ILocale } from './models';
import { Translator } from './utils/translator';

export interface IEOLocaleContext {
	language: string;
	locales: ILocale[];
	translator: Translator;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		language: '',
		locales: [],
		translator: new Translator(),
	},
	(prev, next) => (prev.language !== next.language ? 1 : 0),
);
