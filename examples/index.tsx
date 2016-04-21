import './styles.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import highlightedText from '../src/index';

const App = props => (
  <div>
    { props.children }
  </div>
);

const HighlightedApp = highlightedText(App);

ReactDOM.render(
  <HighlightedApp highlightedText="Example">
    <div>
      This is a first Example of highlighted text
      <div>This is a second Example of highlighted text</div>
      <div>
        <div>This is a third Example of highlighted text</div>
        <div>This is a fourth Example of highlighted text<div>This is a fith Example of highlighted text</div></div>
      </div>
    </div>
  </HighlightedApp>, document.getElementById('app'));
