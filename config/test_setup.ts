import { serverPolyfill } from '@eo-locale/polyfills';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

serverPolyfill(['en', 'ru']);

Enzyme.configure({ adapter: new Adapter() });

// Don't show error messages for unit tests
global.console.error = jest.fn();
