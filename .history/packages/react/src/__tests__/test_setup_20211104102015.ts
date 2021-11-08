import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });
