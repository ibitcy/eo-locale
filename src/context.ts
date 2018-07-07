import * as React from 'react';

import { TMessage } from './models';
import { createMessageFormatter, IFormatMessageOptions } from './utils';

export interface IEOLocaleContext {
	language: string;
	messages: Map<string, TMessage>;

	formatMessage(value: string, options: IFormatMessageOptions): string;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		language: '',
		messages: new Map(),

		formatMessage: createMessageFormatter('', new Map()),
	},
	(prev, next) => {
		if (prev.language !== next.language) {
			return 1;
		}

		return 0;
	},
);
