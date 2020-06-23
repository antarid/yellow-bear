import React, { useState, useEffect, useCallback } from 'react';
import { fetchJogs } from '../../api';
import { Jog } from '../../interfaces';
import JogsList from './JogsList';
import NoJogs from './NoJogs';

const Jogs: React.FC = () => {
  const [jogs, setJogs] = useState<Jog[]>([]);
  const openPopup = useCallback(() => {
    alert('opened popup!');
  }, []);

  useEffect(() => {
    const getJogs = async () =>
      fetchJogs()
        .then((res) => res.json())
        .then((data) => setJogs(data.response.jogs));
    getJogs();
  }, []);

  return jogs.length ? (
    <JogsList jogs={jogs} openPopup={openPopup}></JogsList>
  ) : (
    <NoJogs openPopup={openPopup}></NoJogs>
  );
};

export default Jogs;
