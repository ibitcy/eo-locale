import * as React from 'react';

import { EOLocaleContext, IEOLocaleContext } from './context';
import { ILocale, TMessage } from './models';
import { convertObjectToMap } from './utils';

export interface IEOLocaleProviderProps {
	defaultLanguage: string;
	locales: ILocale[];
}

export class EOLocaleProvider extends React.PureComponent<
	IEOLocaleProviderProps,
	IEOLocaleContext
> {
	public constructor(props: IEOLocaleProviderProps) {
		super(props);

		const { defaultLanguage } = this.props;

		const messages = this.getLangugageMessages(defaultLanguage);

		if (!messages) {
			throw new Error('Error! Invalid Provider props.');
		}

		this.state = {
			language: defaultLanguage,
			messages,
			onChangeLanguage: this.handleChangeLanguage
		};
	}

	public render() {
		return (
			<EOLocaleContext.Provider value={this.state}>
				{this.props.children}
			</EOLocaleContext.Provider>
		);
	}

	private handleChangeLanguage = (newLanguage: string): void => {
		const messages = this.getLangugageMessages(newLanguage);

		if (!messages) {
			return;
		}

		this.setState({
			language: newLanguage,
			messages
		});
	};

	private getLangugageMessages(language: string): Map<string, TMessage> | null {
		const locale = this.props.locales.find(
			locale => locale.language === language
		);

		if (!locale) {
			return null;
		}

		return convertObjectToMap<TMessage>(locale.messages);
	}
}
