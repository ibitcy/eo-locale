import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { TFormatMessageOptions } from '.';
import { EOLocaleContext } from '../context';

export function useLocalizedProps(props: TFormatMessageOptions): TFormatMessageOptions {
	const context = React.useContext(EOLocaleContext);

	const keys = Object.keys(props);
	keys.forEach(key => {
		const prop = props[key];

		if (React.isValidElement(prop)) {
			props[key] = renderToStaticMarkup(
				<EOLocaleContext.Provider value={context}>{prop}</EOLocaleContext.Provider>,
			);
		}
	});

	return props;
}