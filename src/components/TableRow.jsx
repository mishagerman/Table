import React from 'react';

const TableRow = ({ rowList }) => (
  <tbody>
    {rowList.map((row, rowIndex) => (
      <tr key={row.id || rowIndex}>
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
              />
            ) : null}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableRow;



