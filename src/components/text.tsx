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
				{context => {
					const formattedText = context.formatMessage(id, {
						...sharedProps,
					});

					if (context.isEditable) {
						return (
							<span data-lokalise data-key={id}>
								{formattedText}
							</span>
						);
					}

					return formattedText;
				}}
			</EOLocaleContext.Consumer>
		);
	}
}
