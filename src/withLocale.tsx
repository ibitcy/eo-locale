import * as React from 'react';
import { EOLocaleContext, IEOLocaleContext } from './context';

export interface IWithLocaleProps
	extends Pick<IEOLocaleContext, 'language' | 'formatMessage'> {};


export function withLocale<T = {}>(
	WrappedComponent: React.ComponentClass,
): React.ComponentClass<T, {}> {
	return class WithLocale extends React.PureComponent<T, {}> {
		public render() {
			return (
				<EOLocaleContext.Consumer>
					{context => {
						const { language, formatMessage } = context;
						return (
							<WrappedComponent
								{...this.props}
								{...{ language, formatMessage }}
							/>
						);
					}}
				</EOLocaleContext.Consumer>
			);
		}
	};
}
