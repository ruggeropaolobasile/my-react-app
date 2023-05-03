import React, { useState } from 'react';
import axios from 'axios';

const InterviewForm = () => {
  const [applicantName, setApplicantName] = useState('');
  const [position, setPosition] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interview = {
      applicantName,
      position,
      interviewDate,
      status,
    };

    // await axios.post('api/interviews', interview);
    await axios.post('http://localhost:5127/api/interviews', interview)
    setApplicantName('');
    setPosition('');
    setInterviewDate('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome candidato:</label>
        <input
          type="text"
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
        />
      </div>
      <div>
        <label>Posizione:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div>
        <label>Data colloquio:</label>
        <input
          type="date"
          value={interviewDate}
          onChange={(e) => setInterviewDate(e.target.value)}
        />
      </div>
      <div>
        <label>Stato:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Seleziona lo stato</option>
          <option value="New">Nuovo</option>
          <option value="InProgress">In corso</option>
          <option value="Completed">Completato</option>
        </select>
      </div>
      <button type="submit">Aggiungi colloquio</button>
    </form>
  );
};

export default InterviewForm;
