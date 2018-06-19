import * as React from 'react';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../utils';

export interface IEOLocaleTextProps extends IFormatMessageOptions {
	id: string;
}

export class EOLocaleText extends React.PureComponent<IEOLocaleTextProps, {}> {
	public render() {
		const { children, id, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context =>
					context.formatMessage(id, {
						...sharedProps
					})
				}
			</EOLocaleContext.Consumer>
		);
	}
}
