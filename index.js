import React from 'react';
const { Component, PropTypes } = React;

export default class TextInputBox extends Component {
  state: {
    timeoutId: ?number,
    value: string,
  };

  constructor(props) {
    super(props);
    this.state = {
      timeoutId: null,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  clearTimeout() {
    if (this.state.timeoutId) {
      global.clearTimeout(this.state.timeoutId);
      this.state.timeoutId = null;
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  handleChange(newText: string, debouncePeriod: number) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newText);
    }

    this.clearTimeout();
    const timeoutId = global.setTimeout(() => {
      if (typeof this.props.onDebounce === 'function') {
        this.props.onDebounce();
      }
    }, debouncePeriod);

    this.setState({
      value: newText,
      timeoutId,
    });
  }

  render() {
    const { placeholder, debounce } = this.props;
    const handleChange = event => this.handleChange(event.target.value, debounce);

    return (
      <div className="text-input-box-container">
        <input
          type="text"
          className="text-input-box"
          value={ this.state.value }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
      </div>
    );
  }
}

TextInputBox.defaultProps = {
  type: 'text',
};

TextInputBox.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  debounce: PropTypes.number,
  onDebounce: PropTypes.func,
  placeholder: PropTypes.string,
};
