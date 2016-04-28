import * as React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import TextInputBox from '../index';

test('should render an empty text input box', t => {
  const onChange = text => text;
  const wrapper = shallow(<TextInputBox onChange={onChange} />)
  const expected = '<input type="text" value=""/>';
  const result = wrapper.html().includes(expected);
  t.is(result, true);
});

test('should have optional placeholder text', t => {
  const wrapper = shallow(<TextInputBox className="test-class" />);
  const expected = 'class="test-class"';
  const result = wrapper.html().includes(expected);
  t.is(result, true);
});

test('should be able to have its class set', t => {
  const wrapper = shallow(<TextInputBox className="test-class" />);
  const expected = 'class="test-class"';
  const result = wrapper.html().includes(expected);
  t.is(result, true);
});

test('should capture text', t => {
  const onChange = text => {
    t.is(text, 'example');
  };
  const wrapper = shallow(<TextInputBox onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 'example' } });
});

test('should be able to return a debounced string', t => {
  let savedText = null;
  const onChange = (text) => { savedText = text; };
  const onDebounce = () => {
    t.is(savedText, 'example');
  };
  const wrapper = mount(<TextInputBox onDebounce={onDebounce} onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 'example' } });
});
