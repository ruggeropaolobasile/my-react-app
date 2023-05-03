import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditInterview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicantName, setApplicantName] = useState('');
  const [position, setPosition] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchInterview = async () => {
      const { data } = await axios.get(`/api/interviews/${id}`);
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

    await axios.put(`/api/interviews/${id}`, interview);
    navigate('/admin');
  };

  return (
    <div>
      <h1>Modifica Colloquio</h1>
      <form onSubmit={handleSubmit}>
        {/* ... */}
      </form>
    </div>
  );
};

export default EditInterview;
