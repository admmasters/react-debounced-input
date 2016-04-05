import React, { PropTypes } from 'react';
import { pure } from 'recompose';

const TableHeader = (props) =>
  <thead>
    <tr>
      { props.config.map((column, i) =>
        <th key={`table-column-${i}`} className="list-table__header-item">{ column.columnTitle }</th>)
      }
    </tr>
  </thead>;

TableHeader.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      columnTitle: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default pure(TableHeader);
