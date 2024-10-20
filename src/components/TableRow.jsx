import React from 'react';

const TableRow = ({ row, rowIndex, onInputChange }) => (
  <tr>
    <td>{row.name}</td>
    <td>{row.rowNumber}</td>
    {row.indicatorList.map((indicator, indIndex) => (
      <td key={indicator.id || indIndex}>
        {indicator.indicatorsClassifier ? (
          <input
            type="text"
            defaultValue="Начните вводить"
            onFocus={(e) => e.target.value === "Начните вводить" && (e.target.value = "")}
            onBlur={(e) => e.target.value === "" && (e.target.value = "Начните вводить")}
            onChange={(e) => onInputChange(rowIndex, indicator.id, e.target.value)} 
          />
        ) : null}
      </td>
    ))}
  </tr>
);

export default TableRow;






