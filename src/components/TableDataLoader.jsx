import { useEffect } from 'react';

const TableDataLoader = ({ onDataLoaded }) => {
  useEffect(() => {
    fetch('/table.json') 
      .then((response) => response.json())
      .then(onDataLoaded)
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, [onDataLoaded]);

  return null; 
};

export default TableDataLoader;




