import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });

// Don't show error messages for unit tests
global.console.error = jest.fn();
