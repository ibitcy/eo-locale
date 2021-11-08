import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });
