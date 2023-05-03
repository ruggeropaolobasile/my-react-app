// server  http://localhost:5127/api/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    const response = await axios.get('http://localhost:5127/api/employee');
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleEmployeeUpdate = async (updatedEmployee) => {
    await axios.put(`http://localhost:5127/api/employee/${updatedEmployee.id}`, updatedEmployee);
    fetchEmployees();
    setSelectedEmployee(null);
  };

  const handleEmployeeDelete = async (employeeId) => {
    await axios.delete(`/api/employee/${employeeId}`);
    fetchEmployees();
  };

  return (
    <div className="employee-list">
      <h2>Dipendenti</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Posizione</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => handleEmployeeEdit(employee)}>Modifica</button>
                <button onClick={() => handleEmployeeDelete(employee.id)}>Elimina</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <EmployeeForm
          employee={selectedEmployee}
          onSubmit={handleEmployeeUpdate}
          onCancel={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeList;
