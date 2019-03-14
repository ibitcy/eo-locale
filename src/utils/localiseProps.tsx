import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { EOLocaleContext, IEOLocaleContext } from '../context';

export function localiseProps(props: Record<string, any>, context: IEOLocaleContext): Record<string, any> {
	const newProps = { ...props };

	Object.keys(newProps).forEach(key => {
		const prop = newProps[key];

		if (React.isValidElement(prop)) {
			newProps[key] = renderToStaticMarkup(<EOLocaleContext.Provider value={context}>{prop}</EOLocaleContext.Provider>);
		}
	});

	return newProps;
}
