const GenerateTableData = (partitionList) => {
  const results = [];

  partitionList.forEach((partition) => {
    partition.detailsSet.forEach((details) => {
      const neoHeaderList = details.neoHeaderList || [];
      const rowList = details.rowList || [];

      const maxRows = Math.max(...neoHeaderList.map((header) => header.headerRow)) + 1;
      const maxCols = Math.max(...neoHeaderList.map((header) => header.headerColumn)) + 1;

      const headerGrid = Array.from({ length: maxRows }, () => Array(maxCols).fill(null));

      neoHeaderList.forEach((header) => {
        for (let row = header.headerRow; row < header.headerRow + header.rowSpan; row++) {
          for (let col = header.headerColumn; col < header.headerColumn + header.colSpan; col++) {
            if (row === header.headerRow && col === header.headerColumn) {
              headerGrid[row][col] = {
                value: header.value,
                colSpan: header.colSpan,
                rowSpan: header.rowSpan,
              };
            } else {
              headerGrid[row][col] = { value: 'Занято' };
            }
          }
        }
      });

      results.push({ headerGrid, rowList });
    });
  });

  return results;
};

export default GenerateTableData;


  