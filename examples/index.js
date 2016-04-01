import React from 'react';
import ReactDOM from 'react-dom';
import TextInputBox from '../src/index';

class BasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleDebounceText = this.handleDebounceText.bind(this);

    this.state = {
      text: '',
      debouncedText: '',
    };
  }

  handleChangeText(text) {
    this.setState({
      text,
    });
  }

  handleDebounceText() {
    this.setState({
      debouncedText: this.state.text,
    });
  }

  render() {
    return (
      <div>
        <TextInputBox
          placeholder="Enter some text"
          onChange={ this.handleChangeText }
          onDebounce={ this.handleDebounceText }
          debounce={ 1000 }
        />
        <div>
          <label>Text: { this.state.text }</label>
        </div>
        <div>
          <label>Debounced: { this.state.debouncedText }</label>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('app'));
