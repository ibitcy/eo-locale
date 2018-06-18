import 'intl';

import IntlMessageFormat from 'intl-messageformat';

import { TMessage } from '../models';

export function convertObjectToMap<T>(obj: {
	[index: string]: T;
}): Map<string, T> {
	return new Map(Object.entries(obj));
}

export interface IFormatMessageOptions {
	language: string;

	defaultMessage?: string;
	values?: object;
}

export function createMessageFormatter(
	messages: Map<string, TMessage>
): (value: string, options: IFormatMessageOptions) => string {
	return (value: string, options: IFormatMessageOptions) => {
		let message = messages.get(value);

		if (typeof message === 'number') {
			message = message.toString();
		}

		if (typeof message === 'string') {
			if (message.includes('{') && options.values) {
				const formattedMessage = new IntlMessageFormat(
					message,
					options.language
				);
				let output = '';

				try {
					output = formattedMessage.format(options.values);
				} catch (error) {
					console.error('[react-eo-locale] ', error);
				}

				return output;
			}

			return message;
		}

		if (options.defaultMessage) {
			return options.defaultMessage;
		}

		return value;
	};
}

export interface IFormatNumberOptions extends Intl.NumberFormatOptions {
	language: string;
}

export function formatNumber(
	value: number,
	options: IFormatNumberOptions
): string {
	const { language, ...numberFormatOptions } = options;

	const numberFormat = new Intl.NumberFormat(
		options.language,
		numberFormatOptions
	);

	return numberFormat.format(value);
}

export interface IFormatDateOptions extends Intl.DateTimeFormatOptions {
	language: string;
}

export function formatDate(value: Date, options: IFormatDateOptions): string {
	const { language, ...dateFormatOptions } = options;

	const dateFormat = new Intl.DateTimeFormat(
		options.language,
		dateFormatOptions
	);

	return dateFormat.format(value);
}
