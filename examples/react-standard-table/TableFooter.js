import React, { PropTypes } from 'react';
import { pure } from 'recompose';

const ListFooter = ({ children }) => (
  <div className="list-footer">
    { children }
  </div>
);

ListFooter.propTypes = {
  onPrevPressed: PropTypes.func,
  onNextPressed: PropTypes.func,
  children: PropTypes.node,
};

export default pure(ListFooter);
