import * as React from 'react';

import { TMessage } from './models';
import {
	createFormatDate,
	createFormatNumber,
	createMessageFormatter,
	TFormatDate,
	TFormatMessage,
	TFormatNumber,
} from './utils';

export interface IEOLocaleContext {
	isEditable: boolean;
	language: string;
	messages: Map<string, TMessage>;

	formatDate: TFormatDate;
	formatMessage: TFormatMessage;
	formatNumber: TFormatNumber;
}

export const EOLocaleContext = React.createContext<IEOLocaleContext>(
	{
		isEditable: false,
		language: '',
		messages: new Map(),

		formatDate: createFormatDate(''),
		formatMessage: createMessageFormatter('', new Map()),
		formatNumber: createFormatNumber(''),
	},
	(prev, next) => (prev.language !== next.language ? 1 : 0),
);
