import { FormatMessageOptions, ILocale, Message } from './models';
import { format } from './parser/parser';
import delve from 'dlv';

export class Translator {
  private readonly language: string;
  private readonly messages: Record<string, Message | Record<string, Message>>;

  public onError: ErrorLogger = console.error;

  public constructor(language = 'en', locales: ILocale[] = []) {
    const locale = locales.find(item => item.language === language);

    this.language = language;
    this.messages = locale ? locale.messages : {};
  }

  public formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(this.language, options).format(value);
  }

  public formatNumber(
    value: number,
    options?: Intl.NumberFormatOptions,
  ): string {
    return new Intl.NumberFormat(this.language, options).format(value);
  }

  public translate(id: string, options: FormatMessageOptions = {}): string {
    const { defaultMessage, ...values } = options;
    const message: Message | Record<string, Message> = delve(this.messages, id, defaultMessage || id);

    if (message === id) {
      this.onError(new Error(`[eo-locale] id missing "${id}"`));
    }

    if (typeof message === 'string') {
      try {
        return format(this.language, message, values);
      } catch (error) {
        this.onError(error);
      }
    }

    return message.toString();
  }
}

export type ErrorLogger = (error: Error) => void;
