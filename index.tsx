import * as React from 'react';

export interface PropTypes {
  type: string;
  onChange: (value: string) => void;
  onDebounce: () => void;
  placeholder: string,
  debounce: number,
}

export interface State {
  timeoutId?: any;
  value: string;
}

export default class TextInputBox extends React.Component <PropTypes, State> {
  constructor(props: PropTypes) {
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

  handleChange(newText:string, debouncePeriod:number) {
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
    const handleChange = event => this.handleChange(event.target.value, this.props.debounce);

    return (
      <div className="text-input-box-container">
        <input
          type="text"
          className="text-input-box"
          value={ this.state.value }
          onChange={ handleChange }
          placeholder={ this.props.placeholder }
        />
      </div>
    );
  }
}