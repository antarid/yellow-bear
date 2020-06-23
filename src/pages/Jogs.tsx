import React, { useContext } from 'react';
import LogIn from '../components/Jogs/LogIn';
import Jogs from '../components/Jogs/index';
import AuthContext from '../contexts/Auth';

const JogsPage: React.FC = () => {
  const { token } = useContext(AuthContext);
  return !!token ? <Jogs></Jogs> : <LogIn></LogIn>;
};

export default JogsPage;

export const routeName = '/';
