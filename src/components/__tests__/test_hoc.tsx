import * as React from 'react';
import { withLocale, IWithLocaleProps } from '../../withLocale';

interface IProps extends IWithLocaleProps, IClearProps {
};

interface IClearProps {
	id: string;
}

class PureTestHoc extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<>
				<span>{this.props.language}</span>
				<span>{this.props.formatMessage(this.props.id)}</span>
			</>
		);
	}
}

export const TestHoc = withLocale<IClearProps>(PureTestHoc);