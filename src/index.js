import React from 'react';
const { Component, PropTypes } = React;

export default class TextInputBox extends Component {
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
      window.clearTimeout(this.state.timeoutId);
      this.state.timeoutId = null;
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  handleChange(newText, debouncePeriod) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newText);
    }

    this.clearTimeout();
    const timeoutId = window.setTimeout(() => {
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
        <input
          type="text"
          className={ this.props.className }
          value={ this.state.value }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
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
  className: PropTypes.string,
};
