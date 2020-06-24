import React, { createContext, useState } from 'react';

const AuthContext = createContext<{
  token: string | null;
  authenticate: (token: string) => void;
}>({
  authenticate: (token) => {},
  token: null,
});

export default AuthContext;

export const AuthContextWrapper: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const authenticate = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return <AuthContext.Provider value={{ token, authenticate }}>{children}</AuthContext.Provider>;
};
