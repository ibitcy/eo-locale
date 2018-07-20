import * as React from 'react';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../utils';

export interface IEOLocaleHtmlProps extends IFormatMessageOptions {
	id: string;
}

export class EOLocaleHtml extends React.PureComponent<IEOLocaleHtmlProps, {}> {
	public render() {
		const { children, id, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context => {
					if (context.isEditable) {
						return (
							<span
								data-lokalise
								data-key={id}
								dangerouslySetInnerHTML={{
									__html: context.formatMessage(id, {
										...sharedProps,
									}),
								}}
							/>
						);
					}

					return (
						<span
							dangerouslySetInnerHTML={{
								__html: context.formatMessage(id, {
									...sharedProps,
								}),
							}}
						/>
					);
				}}
			</EOLocaleContext.Consumer>
		);
	}
}
