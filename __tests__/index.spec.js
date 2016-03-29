/* global describe, it*/
import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import highlightedText from '../';

const MockText = props => (<div>
  <span>{ props.text }</span>
</div>);

MockText.propTypes = { text: PropTypes.string };

const HighlightedMockText = highlightedText(MockText);

describe('highlightedTextDecorator', () => {
  it('should be able to highlight text', () => {
    const wrapper = shallow(<HighlightedMockText text="Hello Example" highlightedText="Hello" />);
    expect(wrapper.html()).to.contain('<strong class="highlighted-text">Hello</strong>');
  });
});
