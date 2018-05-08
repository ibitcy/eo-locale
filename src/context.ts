import * as React from 'react';
import { TMessage } from './models/index';

export interface IEOLocaleContext {
	language: string;
	messages: Map<string, TMessage>;

	onChangeLanguage: (newLocale: string) => void;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		language: '',
		messages: new Map(),
		onChangeLanguage: () => {}
	},
	(prev, next) => {
		if (prev.language !== next.language) {
			return 1;
		}

		return 0;
	}
);
