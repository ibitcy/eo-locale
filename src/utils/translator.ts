import IntlMessageFormat from 'intl-messageformat';

import { IFormatMessageOptions, ILocale, TMessage } from '../models';

interface IProps {
	language: string;
	locales: ILocale[];
}

const DEFAULT_PROPS: IProps = {
	language: 'en',
	locales: [],
};

// TODO make own formatter instead intl-messageformat, use Intl.PluralRules
export class Translator {
	private readonly language: string;
	private readonly messages: Map<string, TMessage>;

	public constructor(props?: Partial<IProps>) {
		const initialProps: IProps = {
			...DEFAULT_PROPS,
			...props,
		};

		const locale = initialProps.locales.find(item => item.language === initialProps.language);
		let messages = new Map();

		if (locale) {
			messages = new Map<string, TMessage>(Object.entries(locale.messages));
		}

		this.language = initialProps.language;
		this.messages = messages;
	}

	public formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string {
		const dateFormat = new Intl.DateTimeFormat(this.language, options);
		return dateFormat.format(value);
	}

	public formatNumber(value: number, options?: Intl.NumberFormatOptions) {
		const numberFormat = new Intl.NumberFormat(this.language, options);
		return numberFormat.format(value);
	}

	public formatMessage(value: string, options: IFormatMessageOptions = {}) {
		const { defaultMessage, ...sharedOptions } = options;

		let message = this.messages.get(value);

		if (typeof message === 'number') {
			message = message.toString();
		}

		if (typeof message === 'string') {
			const formattedMessage = new IntlMessageFormat(message, this.language);
			let output = value;

			try {
				output = formattedMessage.format(sharedOptions);
			} catch (error) {
				console.error('[eo-locale] ', error);
			}

			return output;
		}

		if (typeof defaultMessage === 'string') {
			return defaultMessage;
		}

		return value;
	}
}
