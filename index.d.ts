import * as React from 'react';

export interface HighlightedTextPropTypes {
    children?: React.ReactNode;
    highlightedText: string;
    matchClass?: string;
}

declare const HighlightText: (ComposedComponent: any) => (props: HighlightedTextPropTypes) => any;
export default HighlightText;
