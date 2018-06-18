import * as React from 'react';

import { TMessage } from './models';
import { IFormatMessageOptions } from './utils';
import { createMessageFormatter } from './utils';

export interface IEOLocaleContext {
	language: string;
	messages: Map<string, TMessage>;

	formatMessage(value: string, options: IFormatMessageOptions): string;
	onChangeLanguage(newLocale: string): void;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		language: '',
		messages: new Map(),

		formatMessage: createMessageFormatter(new Map()),
		onChangeLanguage: () => {}
	},
	(prev, next) => {
		if (prev.language !== next.language) {
			return 1;
		}

		return 0;
	}
);
