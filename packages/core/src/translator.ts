import { TranslationError } from './models/TranslationError';
import { FormatMessageOptions, Locale, Message } from './models';
import { getTranslationParts } from './parser/parser';

export class Translator {
  private readonly messages: object;
  private memo: Record<string, string | undefined> = Object.create(null);

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
        this.onError(new TranslationError(id, this.language));
      }
    }

    return String(message);
  };

  public getMessageById = (
    id: string,
    defaultMessage?: string,
  ): Message | object | null => {
    // Missing messages are memoized as undefined, so `onError` fires once per id
    // while `defaultMessage` is still applied on every call
    if (!(id in this.memo)) {
      let message: object | string | undefined = (this.messages as any)[id]

      if (typeof message === 'undefined') {
        message = id.split('.').reduce(
          (acc, current) => (acc ? (acc as any)[current] : undefined),
          this.messages,
        );
      }

      if (typeof message !== 'string') {
        this.onError(new TranslationError(id, this.language));
        message = undefined;
      }

      this.memo[id] = message;
    }

    const message = this.memo[id];

    return typeof message === 'string' ? message : defaultMessage || id;
  };
}

export type ErrorLogger = (error: TranslationError) => void;
