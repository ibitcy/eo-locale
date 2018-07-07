export type TMessage = string | number;

export interface IMessages {
	[index: string]: TMessage;
}

export interface ILocale {
	language: string;
	messages: IMessages;
}
