
[![Greenkeeper badge](https://badges.greenkeeper.io/admmasters/react-debounced-input.svg)](https://greenkeeper.io/)

A debounced input control built for use with [React](https://facebook.github.io/react/ "React").
<p>
<b>New version: 0.4.0</b><br />
<ul>
  <li>Now using an instance property to track timeout id to avoid needless re-render</li>
</ul>
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
To run the example(s) clone the [repo](https://github.com/admmasters/react-debounced-input.git "repo") and then use NPM scripts to start a dev server
<pre>
<code>
npm install
npm run dev
</code>
</pre>

<p>
We are pull request friendly - as this is definitely a v1 API! :-)
