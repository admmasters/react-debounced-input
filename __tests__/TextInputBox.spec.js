/* global describe, it*/
import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import TextInputBox from '../src';
import jsDom from 'mocha-jsdom';

describe('<TextInputBox />', () => {
  jsDom();

  it('should render an empty text input box', () => {
    const onChange = text => text;
    const wrapper = shallow(<TextInputBox onChange={onChange} />);
    const expected = '<input type="text" value=""/>';
    const actual = wrapper.html();
    expect(actual).to.contain(expected);
  });

  it('should have optional placeholder text', () => {
    const wrapper = shallow(<TextInputBox placeholder="Placeholder" />);
    const expected = 'placeholder="Placeholder"';
    const actual = wrapper.html();
    expect(actual).to.contain(expected);
  });

  it('should be able to have its class set', () => {
    const wrapper = shallow(<TextInputBox className="test-class" />);
    const expected = 'class="test-class"';
    const actual = wrapper.html();
    expect(actual).to.contain(expected);
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
