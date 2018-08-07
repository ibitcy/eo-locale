import * as React from 'react';

import { EOLocaleProvider } from '../../provider';

const locales = [
	{
		language: 'en',
		messages: {
			hello: 'Hello {name}!',
			test_plural: "{attempts, plural, one {You have one more attempt} other {You have {attempts} attempts}}",
			world: '<strong>world</strong>',
		},
	},
	{
		language: 'ru',
		messages: {
			hello: 'Привет {name}!',
			test_plural: "{attempts, plural, one {} few {} many {} other {}}",
			world: '<strong>мир</strong>',
		},
	},
];

interface IProps {
	isEditable?: boolean;
	language?: string;
}

export class TestWrapper extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<span>
				<EOLocaleProvider
					isEditable={this.props.isEditable}
					language={this.props.language || 'en'}
					locales={locales}
				>
					{this.props.children}
				</EOLocaleProvider>
			</span>
		);
	}
}
