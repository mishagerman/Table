import React, { useState } from "react";
import TableDataLoader from "./components/TableDataLoader";
import PartitionTable from "./components/PartitionTable";
import generateTableData from "./components/GenerateTableData";

import "./styles.css";

function App() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});

  const handleDataLoaded = (fetchedData) => {
    setData(fetchedData);
  };


  const handleInputChange = (rowIndex, indicatorId, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [indicatorId]: value,
    }));
  };


  const handleSubmit = async () => {
 
    const jsonData = JSON.stringify(formData, null, 2);
    
    console.log("Отправляемые данные:", jsonData);

    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных на сервер");
      }

      const result = await response.json();
      console.log("Данные успешно отправлены:", result);
    } catch (error) {
      console.error("Ошибка:", error);
    }
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
      <PartitionTable 
        tableData={tableData} 
        onInputChange={handleInputChange}
      />
      <button onClick={handleSubmit} className="buttonSubmit">Отправить данные на сервер</button>
    </div>
  );
}

export default App;









