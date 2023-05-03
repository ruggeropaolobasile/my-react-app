import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
  const [statusData, setStatusData] = useState({});
  const [positionData, setPositionData] = useState({});
  const [monthData, setMonthData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const statusResponse = await axios.get('/api/report/status');
      setStatusData(statusResponse.data);

      const positionResponse = await axios.get('/api/report/position');
      setPositionData(positionResponse.data);

      const monthResponse = await axios.get('/api/report/month');
      setMonthData(monthResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div className="report">
      <h2>Report</h2>
      <div className="report-section">
        <h3>Colloqui per stato</h3>
        <ul>
          {Object.entries(statusData).map(([status, count]) => (
            <li key={status}>
              {status}: {count}
            </li>
          ))}
        </ul>
      </div>
      <div className="report-section">
        <h3>Colloqui per posizione</h3>
        <ul>
          {Object.entries(positionData).map(([position, count]) => (
            <li key={position}>
              {position}: {count}
            </li>
          ))}
        </ul>
      </div>
      <div className="report-section">
        <h3>Colloqui per mese</h3>
        <ul>
          {Object.entries(monthData).map(([month, count]) => (
            <li key={month}>
              {month}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
