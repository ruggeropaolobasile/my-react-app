import React from 'react';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EditInterview from './components/EditInterview';
import NavBar from './components/NavBar';
import AddCandidate from './components/AddCandidate'; // aggiungi questa riga

import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes, Navigate } from 'react-router-dom';
import Candidates from './components/CandidatesList';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

function Routes() {
  const routes = useRoutes([
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/', element: <Dashboard /> }, // Modifica la rotta della Dashboard qui
    { path: '/admin', element: <AdminPanel /> },
    { path: '/edit-interview/:id', element: <EditInterview /> },
    { path: '/candidates', element: <Candidates /> },

    { path: '*', element: <Navigate to="/signin" replace /> },
  ]);

  return routes;
}

export default App;
