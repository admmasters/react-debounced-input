import React, { PropTypes } from 'react';
import Highlighter from 'react-highlighter';

const highlightFunc = (highlightedText, matchClass) => children => {
  if (Array.isArray(children)) {
    return children.map((child, i) => (
      React.createElement(child.type, { key: `highlighted-child${i}`, ...child.props }, highlightFunc(highlightedText)(child))
    ));
  } else if (typeof children === 'string') {
    return (
      <Highlighter search={highlightedText} matchClass={ matchClass }>
        { children }
      </Highlighter>
    );
  }
  return highlightFunc(highlightedText)(children.props.children);
};

const HighlightText = ComposedComponent => {
  const HighlightedText = props => {
    const { children, highlightedText, matchClass, ...other } = props;
    if (!props.highlightedText || props.highlightedText.length === 0 || !children || children.length === 0) {
      return <ComposedComponent { ...props } />;
    }
    const highlightedChildren = highlightFunc(highlightedText, matchClass)(children);
    return (
      <ComposedComponent { ...other }>
        { highlightedChildren }
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
