import React, { useState } from 'react';

const EmployeeForm = ({ employee, onSubmit, onCancel }) => {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [position, setPosition] = useState(employee.position);
  const [phoneNumber, setPhoneNumber] = useState(employee.phoneNumber || '');
  const [address, setAddress] = useState(employee.address || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...employee, firstName, lastName, email, position, phoneNumber, address });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h3>Modifica dipendente</h3>
      <label htmlFor="firstName">Nome</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Cognome</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="position">Posizione</label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <label htmlFor="phoneNumber">Numero di telefono</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label htmlFor="address">Indirizzo</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Salva</button>
      <button type="button" onClick={onCancel}>
        Annulla
      </button>
    </form>
  );
};

export default EmployeeForm;
