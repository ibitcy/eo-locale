import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatDate } from '../utils';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
	value: Date;

	language?: string;
}

export class EOLocaleDate extends React.PureComponent<IEOLocaleDateProps, {}> {
	public render() {
		const { children, language, value, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context =>
					formatDate(this.props.value, {
						...sharedProps,
						language: language || context.language,
					})
				}
			</EOLocaleContext.Consumer>
		);
	}
}
