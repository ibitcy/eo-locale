export type Message = string | number;

export interface ILocale {
  language: string;
  messages: Record<string, Message>;
}

export type FormatMessageOptions = Partial<{
  defaultMessage: string;
}> & Record<string, any>;
