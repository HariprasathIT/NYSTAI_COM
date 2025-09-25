import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token is still valid (optional)
      setIsAuthenticated(true);
      // You can also decode token to get user info if needed
    }
    setLoading(false);
  }, []);

  const login = (credentials) => {
    // This method is now only used for the old flow
    // The actual API login happens in the Login component
    console.log('Logging in with:', credentials);
    setIsAuthenticated(true);
    setShowAuthModal(false);
    return true;
  };

  // NEW: Method to set authenticated state after API login
  const setAuthenticatedUser = (userData, token) => {
    console.log('🔐 Setting authenticated user:', userData);
    setIsAuthenticated(true);
    setUser(userData);
    setShowAuthModal(false); // This closes the modal
    if (token) {
      localStorage.setItem('token', token);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  const requestAuth = (route) => {
    setPendingRoute(route);
    setShowAuthModal(true);
  };

  const value = {
    isAuthenticated,
    showAuthModal,
    pendingRoute,
    user,
    loading,
    login,
    logout,
    requestAuth,
    setShowAuthModal,
    setPendingRoute,
    setAuthenticatedUser // NEW method
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};