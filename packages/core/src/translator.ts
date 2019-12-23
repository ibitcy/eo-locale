import { FormatMessageOptions, ILocale, Message } from './models';
import { format } from './parser/parser'

export class Translator {
  private readonly language: string;
  private readonly messages: Record<string, Message>;

  public constructor(language = 'en', locales: ILocale[] = []) {
    const locale = locales.find(item => item.language === language);

    this.language = language;
    this.messages = locale ? locale.messages : {};
  }

  public formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(this.language, options).format(value);
  }

  public formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
    return new Intl.NumberFormat(this.language, options).format(value);
  }

  public translate(id: string, options: FormatMessageOptions = {}): string {
    const { defaultMessage, onIdMissing, ...values } = options;
    let message = this.messages[id];

    if (typeof message === 'number') {
      return message.toString();
    }

    if (typeof message === 'undefined') {
      if (typeof onIdMissing === 'function') {
        onIdMissing(id);
      }

      if (typeof defaultMessage !== 'string') {
        return id;
      }

      message = defaultMessage;
    }

    try {
      return format(this.language, message, values);
    } catch (error) {
      console.error('[eo-locale] ', error);
    }

    return message;
  }
}
