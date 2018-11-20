// tslint:disable:max-classes-per-file
import * as React from 'react';

import { EOLocaleDate } from './components/date';
import { EOLocaleHtml } from './components/html';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext, IEOLocaleContext } from './context';
import * as polyfill from './polyfill';
import { EOLocaleProvider } from './provider';
import * as utils from './utils';
import { withLocale as withEoLocale } from './withLocale';

export namespace EOLocale {
	export const Context: React.Context<IEOLocaleContext> = EOLocaleContext;
	export const withLocale = withEoLocale;

	export class Date extends EOLocaleDate {}
	export class Number extends EOLocaleNumber {}
	export class Provider extends EOLocaleProvider {}
	export const Text = EOLocaleText;
	export const Html = EOLocaleHtml;
	
	export const convertObjectToMap = utils.convertObjectToMap;
	export const createMessageFormatter = utils.createMessageFormatter;
	export const formatDate = utils.formatDate;
	export const formatNumber = utils.formatNumber;
	export const isDefined = utils.isDefined;
	
	export const clientPolyfill = polyfill.clientPolyfill;
	export const serverPolyfill = polyfill.serverPolyfill;
}
