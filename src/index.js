import React, { PropTypes } from 'react';
import Highlighter from 'react-highlighter';

// TODO: Correctly generate a unique key as we are using index which is an anti-pattern
const highlightFunc = (highlightedText, matchClass) => children => {
  const finalHighlightFunc = highlightFunc(highlightedText, matchClass);
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      if (typeof child === 'string') {
        return finalHighlightFunc(child);
      }
      return (
        React.createElement(child.type, { key: `highlighted-child${i}`, ...child.props }, finalHighlightFunc(child))
      );
    });
  } else if (typeof children === 'string') {
    return (
      <Highlighter search={highlightedText} matchClass={ matchClass }>
        { children }
      </Highlighter>
    );
  }
  return finalHighlightFunc(children.props.children);
};

const HighlightText = ComposedComponent => {
  const HighlightedText = props => {
    const { children, highlightedText, matchClass, ...other } = props;
    if (!highlightedText || highlightedText.length === 0 || !children || children.length === 0) {
      return <ComposedComponent { ...props } />;
    }
    const highlightedChildren = highlightFunc(highlightedText, matchClass);
    return (
      <ComposedComponent { ...other }>
        { highlightedChildren(children) }
      </ComposedComponent>
    );
  };

  HighlightedText.defaultProps = {
    matchClass: 'highlighted-text',
  };

  HighlightedText.propTypes = {
    children: PropTypes.node,
    highlightedText: PropTypes.string,
    matchClass: PropTypes.string,
  };
  return HighlightedText;
};

export default HighlightText;
