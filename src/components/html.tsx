import * as React from 'react';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../utils';
import { useLocalizedProps } from '../utils/useLocalisedProps';

export interface IEOLocaleHtmlProps extends IFormatMessageOptions {
	id: string;
}

export const EOLocaleHtml: React.FunctionComponent<IEOLocaleHtmlProps> = props => {
	const { children, id, ...shared } = props;
	const context = React.useContext(EOLocaleContext);

	return (
		<span
			dangerouslySetInnerHTML={{
				__html: context.formatMessage(id, useLocalizedProps(shared)),
			}}
		/>
	);
};
