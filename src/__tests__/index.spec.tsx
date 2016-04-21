import * as React from 'react';
import highlightedText from '../index';
import { shallow } from 'enzyme';
import * as Highlighter from 'react-highlighter';
import { expect } from 'chai';

const MockComponent = props => (
  <div>
    { props.children }
  </div>
);

describe('<ReactHighlightedText />', () => {
  it('Should display text', () => {
    const HighlightedApp = highlightedText(MockComponent);
    const wrapper = shallow(<HighlightedApp highlightedText="Example">This is an Example</HighlightedApp>);
    const result = wrapper.find(Highlighter);
    expect(result).to.have.length(1);
  });

  it('Should be able to add a class of .react-highlighted-text', () => {
    const HighlightedApp = highlightedText(MockComponent);
    const wrapper = shallow(<HighlightedApp highlightedText="Example">This is an Example</HighlightedApp>);
    //const result = wrapper.fin
  });
});