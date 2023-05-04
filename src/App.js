import React from 'react';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EditInterview from './components/interview/EditInterview';
import NavBar from './components/NavBar';
import AddCandidate from './components/candidate/AddCandidate';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes, Navigate } from 'react-router-dom';
import Candidates from './components/candidate/CandidatesList';
import JobOffers from './components/jobOffer/JobOffers';
import { addJobOffer } from './components/jobOffer/jobOffersService';
import AddJobOffer from './components/jobOffer/AddJobOffer';


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
    { path: '/', element: <Dashboard /> },
    { path: '/admin', element: <AdminPanel /> },
    { path: '/edit-interview/:id', element: <EditInterview /> },
    { path: '/candidates', element: <Candidates /> },
    { path: '/job-offers', element: <JobOffers /> },
    { path: '/add-job-offer', element: <AddJobOffer addJobOffer={addJobOffer} /> },
    { path: '*', element: <Navigate to="/signin" replace /> },
    ]);
    
    return routes;
    }
    
    export default App;
