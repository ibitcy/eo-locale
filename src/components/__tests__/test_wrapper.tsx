import * as React from 'react';

import { EOLocaleProvider } from '../../provider';

const locales = [
	{
		language: 'en',
		messages: {
			hello: 'Hello {name}!',
		},
	},
	{
		language: 'ru',
		messages: {
			hello: 'Привет {name}!',
		},
	},
];

interface IProps {
	language?: string;
}

export class TestWrapper extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<span>
				<EOLocaleProvider
					language={this.props.language || 'en'}
					locales={locales}
				>
					{this.props.children}
				</EOLocaleProvider>
			</span>
		);
	}
}
