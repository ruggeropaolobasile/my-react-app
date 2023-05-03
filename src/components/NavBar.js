import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebaseConfig';
import styles from '../style/NavBar.module.css'; // Importa il file di stile

const NavBar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={styles.navbar}> {/* Applica la classe 'navbar' */}
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
        <Link to="/candidates">Candidati</Link>
        </li>
        <li>
          <Link to="/admin">Pannello di Amministrazione</Link>
        </li>
        <li>
          <Link to="/signin">SignIN</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;