import React, { useState } from 'react';
import firebase from './firebaseConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registrati</h1>
      <form onSubmit={signUp}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default SignUp;
