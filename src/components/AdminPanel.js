import React from 'react';
import InterviewForm from './InterviewForm';
import EmployeeList from './EmployeeList';

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
