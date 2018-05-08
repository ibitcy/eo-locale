export type TMessage = string | number;

export type TMessages = {
	[index: string]: TMessage;
};

export interface ILocale {
	language: string;
	messages: TMessages;
}
