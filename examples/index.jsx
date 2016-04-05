import './styles.css';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Table, TableRow, TableCell } from './react-standard-table';
import highlightedText from '../src/index';

const TABLE_COLUMNS = [
  { columnTitle: 'Individual', property: 'name' },
  { columnTitle: 'Phone(s)', property: 'telephone_mobile' },
  { columnTitle: 'Address(s)', property: 'address_1' },
  { columnTitle: 'DOB', property: result => result.dob },
];

const RESULTS = [
  {
    name: 'Matt Revell',
    telephone_mobile: '01322 280669',
    address_1: '110 Park Road, Dartford, DA1 1SZ',
    dob: '23/03/1982',
  },
];

const HighlightedTable = highlightedText(Table);

const App = () => (
  <div>
    <HighlightedTable
      highlightedText="Matt"
      config={TABLE_COLUMNS}
    >
      { RESULTS.map((result, i) => (
        <TableRow key={`table-row-${i}`}>
          <TableCell>{ result.name }</TableCell>
          <TableCell>{ result.telephone_mobile }</TableCell>
          <TableCell>{ result.address_1 }</TableCell>
          <TableCell>{ result.dob }</TableCell>
        </TableRow>
      ))}
    </HighlightedTable>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
