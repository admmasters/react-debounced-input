import './styles.css';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import highlightedText from '../src/index';

const Example = props =>
  <div>
    { props.children }
  </div>;

Example.propTypes = {
  children: PropTypes.node.isRequired,
};

const HighlightedExample = highlightedText(Example);

ReactDOM.render(
  <HighlightedExample highlightedText="Example">
  <div>
    <span>Hello Example</span>
  </div>
  <div>
    <span>Hello Example</span>
  </div>
  <div>
    <div>
      <span>Hello Example</span>
    </div>
  </div>
  </HighlightedExample>, document.getElementById('app'));
