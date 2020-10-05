export type Message = string | number;

export interface Locale {
  language: string;
  messages: object;
}

export interface FormatMessageOptions extends Record<string, any> {
  defaultMessage?: string;
}
