import { isDefined } from 'eo-utils';
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

export function createMessageFormatter(
	language: string,
	messages: Map<string, TMessage>,
): (value: string, options?: IFormatMessageOptions) => string {
	return (value: string, options: IFormatMessageOptions = {}) => {
		const { defaultMessage, ...sharedOptions } = options;

		let message = messages.get(value);

		if (typeof message === 'number') {
			message = message.toString();
		}

		if (typeof message === 'string') {
			if (message.includes('{')) {
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
					// tslint:disable-next-line:no-console
					console.error('[eo-locale] ', error);
				}

				return output;
			}

			return message;
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

export function formatNumber(
	value: number,
	options: IFormatNumberOptions,
): string {
	const { language, ...numberFormatOptions } = options;
	const numberFormat = new Intl.NumberFormat(
		options.language,
		numberFormatOptions,
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
		dateFormatOptions,
	);

	return dateFormat.format(value);
}
