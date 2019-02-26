import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatDate } from '../utils';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
	value: Date;

	language?: string;
}

export const EOLocaleDate: React.FunctionComponent<IEOLocaleDateProps> = props => {
	const context = React.useContext(EOLocaleContext);
	const { children, language, value, ...sharedProps } = props;

	return (
		<>
			{formatDate(value, {
				...sharedProps,
				language: language || context.language,
			})}
		</>
	);
};
