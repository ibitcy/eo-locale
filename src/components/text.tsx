import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatMessage } from '../utils';

export interface IEOLocaleTextProps {
	id: string;
	defaultMessage?: string;
	values?: object;
}

export class EOLocaleText extends React.PureComponent<IEOLocaleTextProps, {}> {
	public render() {
		const {
			children,
			...sharedProps,
		} = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context => formatMessage(context.messages, {
					...sharedProps,
					language: context.language,
				})}
			</EOLocaleContext.Consumer>
		);
	}
}
