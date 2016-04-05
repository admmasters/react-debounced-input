import React, { PropTypes } from 'react';
import { pure } from 'recompose';

const TableRow = ({ className, children, isSelected }) => {
  const finalClassName = isSelected ? `${className}--selected` : className;
  return (
    <tr className={finalClassName}>
      { children }
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  isSelected: PropTypes.bool,
  className: PropTypes.string,
};

export default pure(TableRow);
