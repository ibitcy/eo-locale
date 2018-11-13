import * as React from 'react';
import { TFormatMessageOptions } from '../../utils';
import { IWithLocaleProps, withLocale } from '../../withLocale';

interface IProps extends IWithLocaleProps, IClearProps {}

interface IClearProps extends TFormatMessageOptions {
	id: string;
}

class PureTestHoc extends React.PureComponent<IProps, {}> {
	public render() {
		const { language, formatMessage, id, formatNumber, formatDate, ...shared } = this.props;
		return (
			<>
				<span id="language">{language}</span>
				<span id="message">{formatMessage(id, { ...shared })}</span>
				<span id="number">
					{formatNumber(10.844, {
						currency: 'USD',
						maximumFractionDigits: 2,
						minimumFractionDigits: 0,
						style: 'currency',
					})}
				</span>
				<span id="date">
					{formatDate(new Date(2017, 5, 24), {
						day: 'numeric',
						month: 'short',
						year: '2-digit',
					})}
				</span>
			</>
		);
	}
}

export const TestHoc = withLocale<IClearProps>(PureTestHoc);
