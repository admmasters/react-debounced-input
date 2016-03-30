import React, { PropTypes } from 'react';
import Highlighter from 'react-highlighter';

const HighlightText = ComposedComponent => {
  const HighlightedText = props => {
    const { children, highlightedText, ...other } = props;
    if (!props.highlightedText || props.highlightedText.length === 0 || !children || children.length === 0) {
      return <ComposedComponent { ...props } />;
    }
    return (
      <ComposedComponent { ...other }>
        <Highlighter search={highlightedText} matchClass="highlighted-text">
          { children }
        </Highlighter>
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
