import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebaseConfig';

const PrivateRoute = (Component) => {
  const auth = getAuth(app);

  const PrivateComponent = (props) => {
    const [authenticated, setAuthenticated] = React.useState(false);

    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      });
      return unsubscribe;
    }, [auth]);

    if (!authenticated) {
      return <Navigate to="/signin" replace />;
    }

    return <Component {...props} />;
  };

  return PrivateComponent;
};

export default PrivateRoute;
