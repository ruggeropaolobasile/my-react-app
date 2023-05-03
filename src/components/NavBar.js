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
      

        <Link to="/">Dashboard</Link>

        <Link to="/candidates">Candidati</Link>

        <Link to="/admin">Pannello di Amministrazione</Link>
     
        <Link to="/job-offers">Offerte di lavoro</Link>

        <Link to="/add-job-offer">Aggiungi Offerta di Lavoro</Link>

        <Link to="/signin">SignIN</Link>
        
        <button onClick={logout}>Logout</button>

    </nav>
  );
};

export default NavBar;