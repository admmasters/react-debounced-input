import React, { PropTypes } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ config, children, className, headerClassName, bodyClassName }) => {
  return (
    <table className={className} >
      <TableHeader className={headerClassName} config={config} />
      <TableBody className={bodyClassName} >
        { children }
      </TableBody>
    </table>
  );
};

Table.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      columnTitle: PropTypes.string.isRequired,
      property: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.func.isRequired,
      ]),
    }).isRequired,
  ),
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Table;
