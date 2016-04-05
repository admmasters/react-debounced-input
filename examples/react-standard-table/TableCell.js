import React, { PropTypes } from 'react';
import { pure } from 'recompose';

const TableCell = ({ className, children }) => (
  <td className={className}>
    { children }
  </td>
);

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export default pure(TableCell);
