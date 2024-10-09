import React, { useState } from 'react';
import TableDataLoader from './components/TableDataLoader';
import PartitionTable from './components/PartitionTable';
import generateTableData from './components/GenerateTableData';

import './styles.css';

function App() {
  const [data, setData] = useState(null);

  const handleDataLoaded = (fetchedData) => {
    setData(fetchedData);
  };

  if (!data) {
    return (
      <div>
        <TableDataLoader onDataLoaded={handleDataLoaded} />
      </div>
    );
  }

  const tableData = generateTableData(data.partitionList);

  return (
    <div className="table-container">
      <PartitionTable tableData={tableData} />
    </div>
  );
}

export default App;














