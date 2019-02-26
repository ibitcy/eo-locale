import * as React from 'react';

import { ILocale, TMessage } from './models';
import {
	createFormatDate,
	createFormatNumber,
	createMessageFormatter,
	TFormatDate,
	TFormatMessage,
	TFormatNumber,
} from './utils';

export interface IEOLocaleContext {
	language: string;
	locales: ILocale[];
	messages: Map<string, TMessage>;

	formatDate: TFormatDate;
	formatMessage: TFormatMessage;
	formatNumber: TFormatNumber;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		language: '',
		locales: [],
		messages: new Map(),

		formatDate: createFormatDate(''),
		formatMessage: createMessageFormatter('', new Map()),
		formatNumber: createFormatNumber(''),
	},
	(prev, next) => (prev.language !== next.language ? 1 : 0),
);
