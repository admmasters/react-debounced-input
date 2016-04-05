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
    This is an Example of highlighted text
  </HighlightedApp>, document.getElementById('app'));
