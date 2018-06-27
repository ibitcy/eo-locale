const areIntlLocalesSupported = require('intl-locales-supported');

export function clientPolyfill() {
	return new Promise(resolve => {
		if (!Intl) {
			require.ensure(['intl', 'intl/locale-data/jsonp/en.js'], require => {
				require('intl');
				require('intl/locale-data/jsonp/en.js');
				resolve();
			});
		}

		resolve();
	});
}

export function serverPolyfill(locales: string | string[]) {
	if (Intl) {
		// Determine if the built-in `Intl` has the locale data we need.
		if (!areIntlLocalesSupported(locales)) {
			// `Intl` exists, but it doesn't have the data we need, so load the
			// polyfill and patch the constructors we need with the polyfill's.
			var IntlPolyfill = require('intl');
			Intl.NumberFormat = IntlPolyfill.NumberFormat;
			Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
		}
	} else {
		// No `Intl`, so use and load the polyfill.
		global.Intl = require('intl');
	}
}
