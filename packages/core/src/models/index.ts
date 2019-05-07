export type TMessage = string | number;

export interface ILocale {
  language: string;
  messages: Record<string, TMessage>;
}

export type TFormatMessageOptions = Record<string, string | number | React.ReactNode>;

export interface IFormatMessageOptions extends TFormatMessageOptions {
  defaultMessage?: string;
}