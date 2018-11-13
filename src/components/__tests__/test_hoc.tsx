import * as React from 'react';
import { TFormatMessageOptions } from '../../utils';
import { IWithLocaleProps, withLocale } from '../../withLocale';

interface IProps extends IWithLocaleProps, IClearProps {
};

interface IClearProps extends TFormatMessageOptions {
	id: string;
}

class PureTestHoc extends React.PureComponent<IProps, {}> {
	public render() {
		const { language, formatMessage, id, ...shared } = this.props;
		return (
			<>
				<span id="language">{language}</span>
				<span id="message">{formatMessage(id, {...shared})}</span>
			</>
		);
	}
}

export const TestHoc = withLocale<IClearProps>(PureTestHoc);