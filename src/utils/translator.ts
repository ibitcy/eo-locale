import { IFormatMessageOptions, ILocale, TMessage } from '../models';
import { format } from '../parser/parser';

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
		return new Intl.DateTimeFormat(this.language, options).format(value);
	}

	public formatNumber(value: number, options?: Intl.NumberFormatOptions) {
		return new Intl.NumberFormat(this.language, options).format(value);
	}

	public translate(id: string, options: IFormatMessageOptions = {}): string {
		const { defaultMessage, ...values } = options;

		let message = this.messages.get(id);

		if (typeof message === 'number') {
			return message.toString();
		}

		if (typeof message === 'undefined') {
			if (typeof defaultMessage === 'string') {
				message = defaultMessage;
			} else {
				return id;
			}
		}

		return this.formatMessage(message, values);
	}

	private formatMessage(message: string, values: Record<string, any>): string {
		try {
			return format(this.language, message, values);
		} catch (error) {
			console.error('[eo-locale] ', error);
		}

		return message;
	}
}
