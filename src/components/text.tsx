import * as React from 'react';

import { IFormatMessageOptions } from '../utils';
import { withLocale } from '../withLocale';

export interface IEOLocaleTextProps extends IFormatMessageOptions {
	id: string;
}

class Text extends React.PureComponent<IEOLocaleTextProps, {}> {
	public render() {
		const { formatMessage, isEditable, id, ...shared } = this.props;
		const formattedText = formatMessage(id, {
			...shared,
		});

		if (isEditable) {
			return (
				<span data-lokalise data-key={id}>
					{formattedText}
				</span>
			);
		}

		return formattedText;
	}
}

export const EOLocaleText = withLocale<IEOLocaleTextProps>(Text);
