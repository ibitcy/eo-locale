import { FormatMessageOptions, Locale, Message } from './models';
import { format } from './parser/parser';
import delve from 'dlv';

export class Translator {
  private readonly language: string;
  private readonly messages: object;
  private memo: Record<string, Message | object> = {};

  public onError: ErrorLogger = console.error;

  public constructor(language = 'en', locales: Locale[] = []) {
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
    const message: Message | object = this.getMessageById(id, defaultMessage);

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

  private getMessageById(id: string, defaultMessage?: string): Message | object {
    if (!this.memo[id]) {
      this.memo[id] = delve(this.messages, id, defaultMessage || id);
    }

    return this.memo[id];
  }
}

export type ErrorLogger = (error: Error) => void;
