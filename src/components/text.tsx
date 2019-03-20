import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../models';

export interface IEOLocaleTextProps extends IFormatMessageOptions {
	id: string;

	html?: boolean;
}

export const EOLocaleText: React.FunctionComponent<IEOLocaleTextProps> = props => {
	const { children, html, id, ...values } = props;
	const context = React.useContext(EOLocaleContext);

	Object.keys(values).forEach(key => {
		const value = values[key];

		if (React.isValidElement(value)) {
			values[key] = renderToStaticMarkup(<EOLocaleContext.Provider value={context}>{value}</EOLocaleContext.Provider>);
		}
	});

	const result = context.translator.translate(id, values);

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
