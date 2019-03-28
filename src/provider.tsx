import * as React from 'react';

import { EOLocaleContext } from './context';
import { ILocale } from './models';
import { Translator } from './utils/translator';

export interface IEOLocaleProviderProps {
	language: string;
	locales: ILocale[];
}

export const EOLocaleProvider: React.FunctionComponent<IEOLocaleProviderProps> = ({
	children,
	language: initialLanguage,
	locales,
}) => {
	const stateHook = React.useState(initialLanguage);

	return (
		<EOLocaleContext.Provider
			value={{
				language: stateHook[0],
				locales,
				setLanguage: stateHook[1],
				translator: new Translator({ language: stateHook[0], locales }),
			}}
		>
			{children}
		</EOLocaleContext.Provider>
	);
};
