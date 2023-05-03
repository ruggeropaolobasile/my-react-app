import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Report from './Report';



const Dashboard = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5127/api/interviews');
      setInterviews(result.data);
    };

    fetchData();
  }, []);

  return (
    
    <div>
        <Report />
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Nome candidato</th>
            <th>Posizione</th>
            <th>Data del colloquio</th>
            <th>Stato</th>
            <th>Azione</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview) => (
            <tr key={interview.id}>
              <td>{interview.applicantName}</td>
              <td>{interview.position}</td>
              <td>{interview.interviewDate}</td>
              <td>{interview.status}</td>
              <td>
                <Link to={`/edit/${interview.id}`}>
                  <button>Modifica</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
