import * as React from 'react';

import { EOLocaleContext } from '../context';
import { IFormatMessageOptions } from '../utils';
import { localiseProps } from '../utils/localiseProps';

export interface IEOLocaleTextProps extends IFormatMessageOptions {
	id: string;
}

export const EOLocaleText: React.FunctionComponent<IEOLocaleTextProps> = props => {
	const { id, ...shared } = props;
	const context = React.useContext(EOLocaleContext);

	return <>{context.translator.formatMessage(id, localiseProps(shared, context))}</>;
};
