/* @flow */
/* global describe, it*/
import { setupChai, setupJSDOM } from 'qinec-shared/utils/test-utils';
import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import TextInputBox from '../index';

setupJSDOM();
setupChai(chai);

describe('<TextInputBox />', () => {
  it('should render a text input box', () => {
    const onChange = text => text;
    const wrapper = shallow(<TextInputBox onChange={onChange} />);
    const expected = '<div class="text-input-box-container"><input type="text" class="text-input-box" value=""/></div>';
    const actual = wrapper.html();
    expect(actual).to.contain(expected);
  });
  it('should have optional placeholder text', () => {
    const wrapper = shallow(<TextInputBox placeholder="Placeholder" />);
    const expected = '<input type="text" class="text-input-box" value="" placeholder="Placeholder"/>';
    const actual = wrapper.html();
    expect(actual).to.contain(expected);
  });
  it('renders `.text-input-box`', () => {
    const wrapper = shallow(<TextInputBox />);
    const expected = '.text-input-box';
    expect(wrapper.find(expected)).to.have.length(1);
  });
  it('should capture text', done => {
    const onChange = text => {
      expect(text).to.equal('example');
      done();
    };
    const wrapper = shallow(<TextInputBox onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { value: 'example' } });
  });
  it('should be able to return a debounced string', done => {
    let savedText = null;
    const onChange = (text) => { savedText = text; };
    const onDebounce = () => {
      expect(savedText).to.equal('example');
      done();
    };
    const wrapper = mount(<TextInputBox onDebounce={onDebounce} onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { value: 'example' } });
  });
});
