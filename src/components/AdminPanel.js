import React from 'react';
import InterviewForm from './interview/InterviewForm';
import EmployeeList from './employee/EmployeeList';

const AdminPanel = () => {
    return (
      <div>
        <h1>Pannello di Amministrazione</h1>
        <InterviewForm />
        <EmployeeList />

      </div>
    );
  };
  
  export default AdminPanel;
