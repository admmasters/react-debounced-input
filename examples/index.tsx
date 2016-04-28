import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import TextInputBox from '../src/index';

interface BasicExampleState {
  text: string;
  debouncedText: string;
}

class BasicExample extends React.Component<{}, BasicExampleState> {
  constructor(props) {
    super(props);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleDebounceText = this.handleDebounceText.bind(this);

    this.state = {
      text: '',
      debouncedText: '',
    };
  }

  handleChangeText(text: string) {

    this.setState({
      text,
      debouncedText: this.state.debouncedText,
    });
  }

  handleDebounceText() {
    this.setState({
      debouncedText: this.state.text,
    } as BasicExampleState);
  }

  render() {
    return (
      <div>
        <TextInputBox
          placeholder="Enter some text"
          onChange={ this.handleChangeText }
          onDebounce={ this.handleDebounceText }
          debounce={ 1000 }
          value={ this.state.text }
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
