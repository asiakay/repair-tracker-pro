import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [loading, user, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

/* import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';

const withAuth = (Component) => {
  const AuthWrapper = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    // Redirect to login page if user is not authenticated
    if (!user) {
      router.push('/login');
      return null;
    }

    // Render the protected component
    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;

 */
/*  import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { handleAuthenticatedUser, handleUnauthenticatedUser } from "./auth";

const withAuth = (Component) => {
    const WrappedComponent = (props) => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        if (authContext.isAuthenticated) {
            history.push('/login');
        }
    };

    return authContext.isAuthenticated ? (
     <Component {...props} />
    ) : (
        <p>Loading... </p>
    );
};

return WrappedComponent;
};

export default withAuth;

 */

/* const withAuth = (Component) => {
    const AuthRoute = (props) => {
        const { user } = useContext(AuthContext);
        const history = useHistory();

        useEffect(() => {
            if (user === null) {
                history.push('/login');
            }
        }, [user, history]);

        return user ? <Component {...props} /> : null;
    };

    return AuthRoute;
} */
