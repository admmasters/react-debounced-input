import React, { PropTypes } from 'react';
import Highlighter from 'react-highlighter';

const highlightFunc = highlightedText => children => {
  if (Array.isArray(children)) {
    const finalChildren = children.map(child => {
      return React.createElement(child.type, null, highlightFunc(highlightedText)(child));
    });
    return finalChildren;
  } else if (typeof children === 'string') {
    return (
      <Highlighter search={highlightedText} matchClass="highlighted-text">
        { children }
      </Highlighter>
    );
  }
  return highlightFunc(highlightedText)(children.props.children);
};

const HighlightText = ComposedComponent => {
  const HighlightedText = props => {
    const { children, highlightedText, ...other } = props;
    if (!props.highlightedText || props.highlightedText.length === 0 || !children || children.length === 0) {
      return <ComposedComponent { ...props } />;
    }
    const highlightedChildren = highlightFunc(highlightedText)(children);
    return (
      <ComposedComponent { ...other }>
        { highlightedChildren }
      </ComposedComponent>
    );
  };
  HighlightedText.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    highlightedText: PropTypes.string,
  };
  return HighlightedText;
};

export default HighlightText;
