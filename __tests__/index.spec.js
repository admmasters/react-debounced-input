import React, { PropTypes } from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import highlightedText from '../src/';

const MockText = props => (<div>
  { props.children }
</div>);

MockText.propTypes = {
  children: PropTypes.node,
};

MockText.propTypes = { text: PropTypes.string };

const HighlightedMockText = highlightedText(MockText);

describe('highlightedTextDecorator', () => {
  it('should be able to highlight text', () => {
    const wrapper = shallow(<HighlightedMockText highlightedText="Hello">Hello Example</HighlightedMockText>);
    expect(wrapper.html()).to.contain('<strong class="highlighted-text">Hello</strong>');
  });

  it('should be able to handle nested blocks of text', () => {
    const wrapper = render(
      <HighlightedMockText highlightedText="Example">
        <div>Hello Example</div>
        <div>
          <span>Hello Example</span>
        </div>
        <div>Hello Example</div>
      </HighlightedMockText>
    );
    expect(wrapper.find('.highlighted-text')).to.have.length(3);
  });
});

// <div>
//   <span><span>Hello Example</span></span><span><strong class="highlighted-text">Extra</strong><span> Example</span></span></div>
