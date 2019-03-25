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
	const [language, setLanguage] = React.useState(initialLanguage);

	return (
		<EOLocaleContext.Provider
			value={{
				language,
				locales,
				setLanguage,
				translator: new Translator({ language, locales }),
			}}
		>
			{children}
		</EOLocaleContext.Provider>
	);
};
