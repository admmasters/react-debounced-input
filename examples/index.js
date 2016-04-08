import './styles.css';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import highlightedText from '../src';

const App = props => (
  <div>
    { props.children }
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

const HighlightedApp = highlightedText(App);

ReactDOM.render(
  <HighlightedApp
    highlightedText="Example"
  >
    <div>
      This is an Example of highlighted text
      <div>This is another Example of highlighted text</div>
    </div>
  </HighlightedApp>, document.getElementById('app'));
