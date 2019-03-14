import * as React from 'react';

import { EOLocaleContext } from '../context';
import { Translator } from '../utils/translator';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;

	language?: string;
}

export const EOLocaleNumber: React.FunctionComponent<IEOLocaleNumberProps> = props => {
	let { translator } = React.useContext(EOLocaleContext);
	const { children, language, value, ...options } = props;

	if (language) {
		translator = new Translator({ language });
	}

	return <>{translator.formatNumber(value, options)}</>;
};
