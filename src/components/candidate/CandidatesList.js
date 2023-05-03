import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const { data } = await axios.get('http://localhost:5127/api/candidates');
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidati</h1>
      <Link to="/add-candidate">
        <button>Aggiungi candidato</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Azione</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>
                <Link to={`/candidate-details/${candidate.id}`}>
                  <button>Dettagli</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
