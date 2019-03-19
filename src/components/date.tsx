import * as React from 'react';

import { EOLocaleContext } from '../context';
import { Translator } from '../utils/translator';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
	value: Date;

	language?: string;
}

export const EOLocaleDate: React.FunctionComponent<IEOLocaleDateProps> = props => {
	let { translator } = React.useContext(EOLocaleContext);
	const { children, language, value, ...options } = props;

	if (language) {
		translator = new Translator({ language });
	}

	return translator.formatDate(value, options) as any;
};
