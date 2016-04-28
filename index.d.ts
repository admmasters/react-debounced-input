import { Component, Props } from 'react';

export interface ReactDebouncedInputProps extends Props<ReactDebouncedInput> {
  type?: string;
  value?: string;
  onChange?: Function;
  debounce?: number;
  onDebounce?: Function;
  placeholder?: string;
  className?: string;
}

export default class ReactDebouncedInput extends Component<ReactDebouncedInputProps, {}> { }
