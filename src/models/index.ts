export type TMessage = string | number;

export interface ILocale {
	language: string;
	messages: Record<string, TMessage>;
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;