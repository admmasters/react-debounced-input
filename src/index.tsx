import * as React from 'react';
const { Component, PropTypes } = React;

interface TextInputPropTypes {
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  debounce?: number;
  onDebounce?: () => void;
  placeholder?: string;
  className?: string;
}

interface TextInputBoxState {
  timeoutId?: number
}

export default class TextInputBox extends Component<TextInputPropTypes, TextInputBoxState > {
  constructor(props: TextInputPropTypes) {
    super(props);
    this.state = {
      timeoutId: null
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

  handleChange(newText: string, debouncePeriod = 0) {
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
      timeoutId,
    });
  }

  render() {
    const { placeholder, debounce } = this.props;
    const handleChange = event => this.handleChange(event.target.value, debounce);

    return (
        <input
          type={ this.props.type || 'text' }
          className={ this.props.className }
          value={ this.props.value || '' }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
    );
  }
}
