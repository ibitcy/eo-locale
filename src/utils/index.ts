import IntlMessageFormat from 'intl-messageformat';

import { TMessage } from '../models';

export type TFormatMessageOptions = Partial<{
	[name: string]: any;
}>;

export interface IFormatMessageOptions extends TFormatMessageOptions {
	defaultMessage?: string;
}

export type TFormatMessage = (value: string, options?: IFormatMessageOptions) => string;

export function createMessageFormatter(language: string, messages: Map<string, TMessage>): TFormatMessage {
	return (value: string, options: IFormatMessageOptions = {}) => {
		const { defaultMessage, ...sharedOptions } = options;

		let message = messages.get(value);

		if (typeof message === 'number') {
			message = message.toString();
		}

		if (typeof message === 'string') {
			const formattedMessage = new IntlMessageFormat(message, language);
			let output = value;

			try {
				output = formattedMessage.format(sharedOptions);
			} catch (error) {
				console.error('[eo-locale] ', error);
			}

			return output;
		}

		if (isDefined<string>(defaultMessage)) {
			return defaultMessage;
		}

		return value;
	};
}

export interface IFormatNumberOptions extends Intl.NumberFormatOptions {
	language: string;
}

export type TFormatNumber = (value: number, options?: Intl.NumberFormatOptions) => string;

export function formatNumber(value: number, options: IFormatNumberOptions) {
	const { language, ...numberFormatOptions } = options;
	const numberFormat = new Intl.NumberFormat(options.language, numberFormatOptions);

	return numberFormat.format(value);
}

export function createFormatNumber(language: string): TFormatNumber {
	return (value: number, options?: Intl.NumberFormatOptions): string => {
		const numberFormat = new Intl.NumberFormat(language, options);

		return numberFormat.format(value);
	};
}

export interface IFormatDateOptions extends Intl.DateTimeFormatOptions {
	language: string;
}

export type TFormatDate = (value: Date, options?: Intl.DateTimeFormatOptions) => string;

export function formatDate(value: Date, options: IFormatDateOptions): string {
	const { language, ...dateFormatOptions } = options;

	const dateFormat = new Intl.DateTimeFormat(options.language, dateFormatOptions);

	return dateFormat.format(value);
}

export function createFormatDate(language: string): TFormatDate {
	return (value: Date, options?: Intl.DateTimeFormatOptions): string => {
		const dateFormat = new Intl.DateTimeFormat(language, options);

		return dateFormat.format(value);
	};
}

export function convertObjectToMap<T>(obj: { [index: string]: T }): Map<string, T> {
	return new Map(Object.entries(obj));
}

export function isDefined<T>(value: undefined | null | T): value is T {
	return typeof value !== 'undefined' && value !== null;
}
