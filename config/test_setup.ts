import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { serverPolyfill } from '../src/polyfill';

serverPolyfill(['en', 'ru']);

Enzyme.configure({ adapter: new Adapter() });

global.console.error = jest.fn();
