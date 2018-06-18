import * as React from 'react';

import { EOLocaleContext } from '../context';

export interface IEOLocaleTextProps {
	id: string;
	defaultMessage?: string;
	values?: object;
}

export class EOLocaleText extends React.PureComponent<IEOLocaleTextProps, {}> {
	public render() {
		const { children, id, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context =>
					context.formatMessage(id, {
						...sharedProps,
						language: context.language
					})
				}
			</EOLocaleContext.Consumer>
		);
	}
}
