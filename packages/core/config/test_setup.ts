import { serverPolyfill } from '@eo-locale/polyfills';

serverPolyfill(['en', 'ru']);

// Don't show error messages for unit tests
global.console.error = jest.fn();
