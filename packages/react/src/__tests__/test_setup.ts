import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });
