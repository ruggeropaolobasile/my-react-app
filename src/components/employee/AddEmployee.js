import React, { useState } from "react";

const AddEmployee = ({ onAddEmployee }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    onAddEmployee({ firstName, lastName, email, phoneNumber, address, position });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setPosition("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Position</label>
        <input
          type="text"
          placeholder="Enter position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <button>Add Employee</button>
    </form>
  );
};

export default AddEmployee;
