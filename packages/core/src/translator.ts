import { FormatMessageOptions, Locale, Message } from './models';
import { getTranslationParts } from './parser/parser';
import delve from 'dlv';

export class Translator {
  private readonly messages: object;
  private memo: Record<string, Message | object> = {};

  public readonly language: string;
  public onError: ErrorLogger = console.error;

  public constructor(language = 'en', locales: Locale[] = []) {
    const locale = locales.find(item => item.language === language);

    this.language = language;
    this.messages = locale ? locale.messages : {};
  }

  public formatDate = (
    value: Date,
    options?: Intl.DateTimeFormatOptions,
  ): string => {
    return new Intl.DateTimeFormat(this.language, options).format(value);
  };

  public formatNumber = (
    value: number,
    options?: Intl.NumberFormatOptions,
  ): string => {
    return new Intl.NumberFormat(this.language, options).format(value);
  };

  public translate = (
    id: string,
    options: FormatMessageOptions = {},
  ): string => {
    const message = this.getMessageById(id, options.defaultMessage);

    if (typeof message === 'string') {
      try {
        return getTranslationParts(this.language, message, options).join('');
      } catch (error) {
        this.onError(error);
      }
    }

    return String(message);
  };

  public getMessageById = (
    id: string,
    defaultMessage?: string,
  ): Message | object | null => {
    if (!this.memo[id]) {
      const message = delve(this.messages, id, defaultMessage || id);

      if (message === id) {
        this.onError(new Error(`[eo-locale] id missing "${id}"`));
      }

      this.memo[id] = message;
    }

    return this.memo[id];
  };
}

export type ErrorLogger = (error: Error) => void;
