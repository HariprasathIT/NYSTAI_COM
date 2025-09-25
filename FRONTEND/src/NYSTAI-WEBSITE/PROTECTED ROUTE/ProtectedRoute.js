import React from 'react';
import { useAuth } from '../CONTEXT AUTH/authContext';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, requestAuth, loading } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    if (!loading && !isAuthenticated) {
      requestAuth(location.pathname);
    }
  }, [isAuthenticated, location.pathname, requestAuth, loading]);

  // Show loading while checking auth status
  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return children;
  }

  return null;
};

export default ProtectedRoute;