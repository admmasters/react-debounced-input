import * as React from 'react';
import * as Highlighter from 'react-highlighter';

interface HighlightedTextPropTypes {
  children?: React.ReactNode;
  highlightedText: string;
  matchClass?: string;
}

function isReactElement<T>(element: React.ReactElement<T> | React.ReactNode): element is React.ReactElement<T> {
    return (element as React.ReactElement<T>).props !== undefined;
}

function getType(element: { type: any }): string {
  return element.type;
}

const highlightFunc = function highlightFunc(highlightedText: string, matchClass = 'react-highlighted-text') {
  let reactKey = 0;
  return function innerHighlightFunc(element: React.ReactNode | React.ReactElement<any>) {
    if (Array.isArray(element)) {
      const mapper = function mapper(child: React.ReactElement<any>) {
        reactKey++;
        if (typeof child === 'string') {
          return innerHighlightFunc(child);
        } else if (isReactElement(child)) {
          const newProps = Object.assign({}, { key: `highlighted-child${reactKey}`}, child.props);
          return React.createElement(getType(child), newProps, innerHighlightFunc(child));
        }
      }
      return element.map(mapper);
    } else if (typeof element === 'string') {
      reactKey++;
      return (
        <Highlighter search={highlightedText} matchClass={ matchClass } key={`highlighted-child${reactKey}`}>
          { element }
        </Highlighter>
      );
    } else if (isReactElement<{children: Array<any>}>(element)) {
      return innerHighlightFunc(element.props.children);
    }
    throw Error('This should never happen!');
  };
};

const HighlightText = ComposedComponent => {
  const HighlightedText: (props: HighlightedTextPropTypes ) => (any|any) = props => {

    const {children, highlightedText, matchClass} = props;

    if (!highlightedText || highlightedText.length === 0 || !children) {
      return <ComposedComponent {...props} />;
    }

    const highlightedChildren = highlightFunc(highlightedText, matchClass);

    return (
      <ComposedComponent {...props} >
        { highlightedChildren(children) }
      </ComposedComponent>
    );
  };
  return HighlightedText;
};

export default HighlightText;
