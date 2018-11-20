import * as React from 'react';

import { IFormatMessageOptions } from '../utils';
import { withLocale } from '../withLocale';

export interface IEOLocaleHtmlProps extends IFormatMessageOptions {
	id: string;
}

class Html extends React.PureComponent<IEOLocaleHtmlProps, {}> {
	public render() {
		const { children, isEditable, formatMessage, id, ...sharedProps } = this.props;

		if (isEditable) {
			return (
				<span
					data-lokalise
					data-key={id}
					dangerouslySetInnerHTML={{
						__html: formatMessage(id, {
							...sharedProps,
						}),
					}}
				/>
			);
		}

		return (
			<span
				dangerouslySetInnerHTML={{
					__html: formatMessage(id, {
						...sharedProps,
					}),
				}}
			/>
		);
	}
}

export const EOLocaleHtml = withLocale<IEOLocaleHtmlProps>(Html);
