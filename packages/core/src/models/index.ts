export type TMessage = string | number;

export interface ILocale {
  language: string;
  messages: Record<string, TMessage>;
}

export interface IFormatMessageOptions extends Record<string, any> {
  defaultMessage?: string;
}