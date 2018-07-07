import { convertObjectToMap } from 'eo-utils';
import * as React from 'react';

import { EOLocaleContext } from './context';
import { ILocale, TMessage } from './models';
import { createMessageFormatter } from './utils';

export interface IEOLocaleProviderProps {
	language: string;
	locales: ILocale[];
}

export class EOLocaleProvider extends React.PureComponent<
	IEOLocaleProviderProps,
	{}
> {
	public render() {
		return (
			<EOLocaleContext.Provider value={this.contextValue}>
				{this.props.children}
			</EOLocaleContext.Provider>
		);
	}

	private get contextValue() {
		const { language } = this.props;
		const messages = this.messages;

		return {
			formatMessage: createMessageFormatter(language, messages),
			language,
			messages
		};
	}

	private get messages(): Map<string, TMessage> {
		const currentLocale = this.props.locales.find(
			locale => locale.language === this.props.language
		);

		if (!currentLocale) {
			return new Map();
		}

		return convertObjectToMap<TMessage>(currentLocale.messages);
	}
}
