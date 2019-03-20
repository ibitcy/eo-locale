import * as React from 'react';

import { useTranslator } from '../utils/use_translator';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
	value: Date;

	language?: string;
}

export const EOLocaleDate: React.FunctionComponent<IEOLocaleDateProps> = props => {
	const { children, language, value, ...options } = props;
	const translator = useTranslator(language);

	return translator.formatDate(value, options) as any;
};
