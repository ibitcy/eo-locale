import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { TFormatMessageOptions } from '.';
import { EOLocaleContext, IEOLocaleContext } from '../context';

export function localiseProps(props: TFormatMessageOptions, context: IEOLocaleContext): TFormatMessageOptions {
	const newProps = { ...props };

	Object.keys(newProps).forEach(key => {
		const prop = newProps[key];

		if (React.isValidElement(prop)) {
			newProps[key] = renderToStaticMarkup(<EOLocaleContext.Provider value={context}>{prop}</EOLocaleContext.Provider>);
		}
	});

	return newProps;
}
