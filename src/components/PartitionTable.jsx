import React from 'react';
import TableRow from './TableRow';

const PartitionTable = ({ tableData }) => (
  <div>
    {tableData.map((table, gridIndex) => (
      <table border="1" key={gridIndex}>
        <thead>
          {table.headerGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((header, colIndex) =>
                header && header.value !== 'Занято' ? (
                  <th
                    key={header.id || `header-${rowIndex}-${colIndex}`}
                    colSpan={header.colSpan > 1 ? header.colSpan : undefined}
                    rowSpan={header.rowSpan > 1 ? header.rowSpan : undefined}
                  >
                    {header.value}
                  </th>
                ) : header && header.value === 'Занято' ? null : (
                  <th key={`empty-${rowIndex}-${colIndex}`} />
                )
              )}
            </tr>
          ))}
        </thead>
        <TableRow rowList={table.rowList} />
      </table>
    ))}
  </div>
);

export default PartitionTable;



