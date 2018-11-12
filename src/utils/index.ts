import IntlMessageFormat from 'intl-messageformat';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { TMessage } from '../models';

export type TFormatMessageOptions = Partial<{
	[name: string]: any;
}>;

export interface IFormatMessageOptions extends TFormatMessageOptions {
	defaultMessage?: string;
}

export type TFormatMessage = (value: string, options?: IFormatMessageOptions) => string;

export function createMessageFormatter(
	language: string,
	messages: Map<string, TMessage>,
): TFormatMessage {
	return (value: string, options: IFormatMessageOptions = {}) => {
		const { defaultMessage, ...sharedOptions } = options;

		let message = messages.get(value);

		if (typeof message === 'number') {
			message = message.toString();
		}

		if (typeof message === 'string') {
			const formattedMessage = new IntlMessageFormat(message, language);
			let output = value;

			const sharedOptionsKeys = Object.keys(sharedOptions);
			sharedOptionsKeys.forEach(sharedOptionKey => {
				const sharedOption = sharedOptions[sharedOptionKey];

				if (React.isValidElement(sharedOption)) {
					sharedOptions[sharedOptionKey] = renderToStaticMarkup(sharedOption);
				}
			});

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

export function formatNumber(value: number, options: IFormatNumberOptions): string {
	const { language, ...numberFormatOptions } = options;
	const numberFormat = new Intl.NumberFormat(options.language, numberFormatOptions);

	return numberFormat.format(value);
}

export interface IFormatDateOptions extends Intl.DateTimeFormatOptions {
	language: string;
}

export function formatDate(value: Date, options: IFormatDateOptions): string {
	const { language, ...dateFormatOptions } = options;

	const dateFormat = new Intl.DateTimeFormat(options.language, dateFormatOptions);

	return dateFormat.format(value);
}

export function convertObjectToMap<T>(obj: { [index: string]: T }): Map<string, T> {
	return new Map(Object.entries(obj));
}

export function isDefined<T>(value: undefined | null | T): value is T {
	return typeof value !== 'undefined' && value !== null;
}
