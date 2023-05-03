import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditInterview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicantName, setApplicantName] = useState('');
  const [position, setPosition] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchInterview = async () => {
      const { data } = await axios.get(`http://localhost:5127/api/interviews/${id}`);
      setApplicantName(data.applicantName);
      setPosition(data.position);
      setInterviewDate(data.interviewDate);
      setStatus(data.status);
    };
  
    fetchInterview();
  }, [id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const interview = {
      id,
      applicantName,
      position,
      interviewDate,
      status,
    };
  
    await axios.put(`http://localhost:5127/api/interviews/${id}`, interview);
    navigate('/admin');
  };
  

  return (
    <div>
      <h1>Modifica Colloquio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="applicantName">Nome candidato</label>
          <input
            type="text"
            id="applicantName"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="position">Posizione</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="interviewDate">Data del colloquio</label>
          <input
            type="date"
            id="interviewDate"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Stato</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="New">Nuovo</option>
            <option value="In progress">In corso</option>
            <option value="Completed">Completato</option>
            <option value="Rejected">Rifiutato</option>
          </select>
        </div>
        <button type="submit">Salva</button>
      </form>
    </div>
  );
  
};

export default EditInterview;
