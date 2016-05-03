import * as React from 'react';
import { ReactDebouncedInputProps } from '../index';
const { Component, PropTypes } = React;

export default class TextInputBox extends Component<ReactDebouncedInputProps, {}> {
  timeoutId: number;
  constructor(props: ReactDebouncedInputProps) {
    super(props);
    this.clearTimeout = this.clearTimeout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clearTimeout(timeoutId?: number) {
    if (this.timeoutId) {
      window.clearTimeout(timeoutId);
      this.timeoutId = null;
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  handleChange(newText: string, debouncePeriod = 0) {
    clearTimeout(this.timeoutId);
    this.timeoutId = window.setTimeout(() => {
      if (typeof this.props.onDebounce === 'function') {
        this.props.onDebounce(newText);
      }
    }, debouncePeriod);

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newText);
    }
  }

  render() {
    const { placeholder, debounce, type, className, value } = this.props;
    const handleChange = event => this.handleChange(event.target.value, debounce);

    return (
        <input
          type={ type || 'text' }
          className={ className }
          value={ value || '' }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
    );
  }
}
