import React, { PropTypes } from 'react';

const TableBody = props =>
  <tbody>
    { props.children }
  </tbody>;

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
