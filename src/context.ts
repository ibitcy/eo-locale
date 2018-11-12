import * as React from 'react';

import { TMessage } from './models';
import { createMessageFormatter, TFormatMessage } from './utils';

export interface IEOLocaleContext {
	isEditable: boolean;
	language: string;
	messages: Map<string, TMessage>;

	formatMessage: TFormatMessage;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		isEditable: false,
		language: '',
		messages: new Map(),

		formatMessage: createMessageFormatter('', new Map()),
	},
	(prev, next) => (prev.language !== next.language ? 1 : 0),
);
