import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { serverPolyfill } from '../src/polyfill';

serverPolyfill(['en', 'ru']);

Enzyme.configure({ adapter: new Adapter() });

// Don't show error messages for unit tests
global.console.error = jest.fn();
