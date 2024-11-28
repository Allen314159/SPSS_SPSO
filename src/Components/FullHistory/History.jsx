import React, { useEffect, useState } from 'react';
import TableHi from './TableHi';
import axios from 'axios';
import { use } from 'echarts';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/spss/admin/getAllPrinter');
        setHistory(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch history');
        setLoading(false);
      }
    };
  
    fetchHistory();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <h2 className='header-title'>LỊCH SỬ HỆ THỐNG</h2>
    <br />
    <TableHi />
    </>
  );
};

export default History;
