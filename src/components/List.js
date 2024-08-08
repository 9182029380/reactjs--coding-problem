import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Record from './Record';

const List = ({ setCurrentRecord }) => {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching records: ', error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="records">
      {records.map(record => (
        <Record key={record.id} record={record} setCurrentRecord={setCurrentRecord} fetchRecords={fetchRecords} />
      ))}
    </div>
  );
};

export default List;
