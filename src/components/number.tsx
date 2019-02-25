import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatNumber } from '../utils';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;

	language?: string;
}

export const EOLocaleNumber: React.FunctionComponent<IEOLocaleNumberProps> = props => {
	const { children, language, value, ...sharedProps } = props;
	const context = React.useContext(EOLocaleContext);

	return (
		<>
			{formatNumber(value, {
				...sharedProps,
				language: language || context.language,
			})}
		</>
	);
};
