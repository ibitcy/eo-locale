import * as React from 'react';
import { EOLocaleContext, IEOLocaleContext } from './context';
import { Omit } from './models';

export interface IWithLocaleProps
	extends Omit<IEOLocaleContext, 'messages'> {};


export function withLocale<T = {}>(
	WrappedComponent: React.ComponentClass,
): React.ComponentClass<T, {}> {
	return class WithLocale extends React.PureComponent<T, {}> {
		public render() {
			return (
				<EOLocaleContext.Consumer>
					{context => {
						return (
							<WrappedComponent
								{...this.props}
								{...context}
							/>
						);
					}}
				</EOLocaleContext.Consumer>
			);
		}
	};
}
