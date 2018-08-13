import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatNumber } from '../utils';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;

	language?: string;
}

export class EOLocaleNumber extends React.PureComponent<
	IEOLocaleNumberProps,
	{}
> {
	public render() {
		const { children, language, value, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context =>
					formatNumber(value, {
						...sharedProps,
						language: language || context.language,
					})
				}
			</EOLocaleContext.Consumer>
		);
	}
}
