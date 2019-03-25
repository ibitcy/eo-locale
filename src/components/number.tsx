import * as React from 'react';

import { useTranslator } from '../utils/use_translator';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;

	language?: string;
}

export const EOLocaleNumber: React.FunctionComponent<IEOLocaleNumberProps> = ({
	children,
	language,
	value,
	...options
}) => {
	return useTranslator(language).formatNumber(value, options) as any;
};
