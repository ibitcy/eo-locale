import * as React from 'react';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../models';
import { localiseProps } from '../utils/localiseProps';

export interface IEOLocaleTransProps extends IFormatMessageOptions {
	id: string;

	html?: boolean;
}

export const EOLocaleTranslation: React.FunctionComponent<IEOLocaleTransProps> = props => {
	const { children, html, id, ...shared } = props;
	const context = React.useContext(EOLocaleContext);
	const result = context.translator.translate(id, localiseProps(shared, context));

	if (html) {
		return (
			<span
				dangerouslySetInnerHTML={{
					__html: result,
				}}
			/>
		);
	}

	return result as any;
};
