import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });
