import React, { useContext } from 'react';
import LogIn from '../components/Jogs/LogIn';
import JogsList from '../components/Jogs/JogsList';
import AuthContext from '../contexts/Auth';

const Jogs: React.FC = () => {
  const { token } = useContext(AuthContext);
  return !!token ? <JogsList></JogsList> : <LogIn></LogIn>;
};

export default Jogs;

export const routeName = '/';
