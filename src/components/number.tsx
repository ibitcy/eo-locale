import * as React from 'react';

import { useTranslator } from '../utils/use_translator';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;

	language?: string;
}

export const EOLocaleNumber: React.FunctionComponent<IEOLocaleNumberProps> = props => {
	const { children, language, value, ...options } = props;
	const translator = useTranslator(language);

	return translator.formatNumber(value, options) as any;
};
