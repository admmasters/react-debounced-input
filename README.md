A debounced input control built for use with [React](https://facebook.github.io/react/ "React").
<p>
<b>New version: 0.3.0</b><br />
<b>React-debounced-input</b> is an open-source component designed to be used in situations where you need to debounce an input element in your React application. This is currently only tested with the text input type.
</p>

<p>
<b>Installation:</b><br />
The easiest way to install the component is to use NPM and insert into your React build process:
<pre><code>npm install react-debounced-input --save</code></pre>
</p>

<p>
<b>Usage:</b><br/>
To use the component (ES6 module syntax):
<pre>
<code>
import ReactDebouncedInput from 'react-debounced-input'
const Example = props => &lt;ReactDebouncedInput /&gt;
</code>
</pre>
<b>PropTypes:</b>
<pre>
<code>
ReactDebouncedInput.defaultProps = {
  type: 'text',
};
ReactDebouncedInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  debounce: PropTypes.number,
  onDebounce: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
</code>
</pre>
</p>

<p>
<b>Examples</b>
<br />
To run the example(s) clone the [repo](https://github.com/admmasters/react-debounced-input.git "repo") and then use NPM scripts to start a dev server at <b>http://localhost:8080/</b>:
<pre>
<code>
npm install
npm start
</code>
</pre>

<p>
We are pull request friendly - as this is definitely a v1 API! :-)
