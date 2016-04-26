import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import highlightedText from '../index';
import HighlighterSlim from '../HighlighterSlim';
import test from 'ava';

const MockComponent = props => (
  <div>
    { props.children }
  </div>
);

test('Should be able to contain children', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = render(<HighlightedApp highlightedText="Example">This is an Example</HighlightedApp>);
  const actual = wrapper.text().includes('This is an Example');
  t.is(actual, true);
});

test('Should contain 1 HighlighterSlim component', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = shallow(<HighlightedApp highlightedText="Example">This is an Example</HighlightedApp>);
  const actual = wrapper.find(HighlighterSlim).length;
  t.is(actual, 1);
});

test.serial('A class of react-highlighted-text is generated', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = mount(<HighlightedApp highlightedText="Example">This is an Example</HighlightedApp>);
  const actual = wrapper.find('.react-highlighted-text').length;
  t.is(actual, 1);
});

test('2 HighlighterSlim elements are create', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = shallow(
    <HighlightedApp highlightedText="Example">
      This is an Example
      <div>This is another Example</div>
    </HighlightedApp>
  );
  const actual = wrapper.find(HighlighterSlim).length;
  t.is(actual, 2);
});

test('Should be able to highlight nested elements', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = shallow(
    <HighlightedApp highlightedText="Example">
       <div>
        <div>This is an Example</div>
      </div>
    </HighlightedApp>
  );
  const actual = wrapper.find(HighlighterSlim).length;
  t.is(actual, 1);
});

test('Should be able to highlight nested elements', t => {
  const HighlightedApp = highlightedText(MockComponent);
  const wrapper = render(
    <HighlightedApp highlightedText="Example">
       <div>
        <div>This is an Example</div>
      </div>
    </HighlightedApp>
  );
  console.log('RESULT: ' + wrapper.html());
  const actual = wrapper.html();
  actual.includes('<strong class="react-highlighted-text">Example</strong>');
  t.truthy(actual);
});
