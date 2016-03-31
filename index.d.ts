import * as React from 'react';
export interface PropTypes {
    type: string;
    onChange: (value: string) => void;
    onDebounce: () => void;
    placeholder: string;
    debounce: number;
}
export interface State {
    timeoutId?: any;
    value: string;
}
export default class TextInputBox extends React.Component<PropTypes, State> {
    constructor(props: PropTypes);
    clearTimeout(): void;
    componentWillUnmount(): void;
    handleChange(newText: string, debouncePeriod: number): void;
    render(): JSX.Element;
}
