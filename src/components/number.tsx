import 'intl/locale-data/jsonp/en';

import * as Intl from 'intl';
import * as React from 'react';

import { EOLocaleContext } from '../context';
import { formatNumber } from '../utils';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
	value: number;
}

export class EOLocaleNumber extends React.PureComponent<
	IEOLocaleNumberProps,
	{}
> {
	public render() {
		const { children, value, ...sharedProps } = this.props;

		return (
			<EOLocaleContext.Consumer>
				{context =>
					formatNumber(this.props.value, {
						...sharedProps,
						language: context.language
					})
				}
			</EOLocaleContext.Consumer>
		);
	}
}
