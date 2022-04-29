import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Numeric } from '../index';
import { TestWrapper } from './test_wrapper';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
const { window } = jsdom;

function copyProps(src: any, target: any) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window as any;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
} as any;
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);

describe('Numeric', () => {
  it('Should render formatted number for en', () => {
    const formatted = Enzyme.render(
      <TestWrapper>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });

  it('Should render formatted number for ru', () => {
    const formatted = Enzyme.render(
      <TestWrapper language='ru'>
        <Numeric value={1000} />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1 000');
  });

  it('Should provide custom language in component', () => {
    const formatted = Enzyme.render(
      <TestWrapper language='ru'>
        <Numeric value={1000} language='en' />
      </TestWrapper>,
    );

    expect(formatted.text()).toEqual('1,000');
  });

  // it('Should update language', () => {
  //   const formatted = Enzyme.mount(
  //     <TestWrapper language='en'>
  //       <Numeric value={1000} />
  //     </TestWrapper>,
  //   );

  //   formatted.setProps({
  //     language: 'ru',
  //   });

  //   expect(formatted.find('span').text()).toEqual('1 000');
  // });
});
