import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in from local storage
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    if (email && password) {
      const mockUser = {
        name: email.split('@')[0],
        email: email,
      };
      setUser(mockUser);
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const signup = (name, email, password) => {
    // Mock signup logic
    if (name && email && password) {
      const mockUser = {
        name,
        email,
      };
      setUser(mockUser);
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      return { success: true };
    }
    return { success: false, message: 'All fields are required' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
