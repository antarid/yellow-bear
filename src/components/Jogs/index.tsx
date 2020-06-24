import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { fetchJogs, addJog } from '../../api';
import { Jog, JogInput } from '../../interfaces';
import FilterContext from '../../contexts/Filter';
import JogsList from './JogsList';
import NoJogs from './NoJogs';
import OpenPopupButton from './OpenPopupButton';
import Popup from './Popup';

const Jogs: React.FC = () => {
  const { dateFrom, dateTo } = useContext(FilterContext);
  const [jogs, setJogs] = useState<Jog[]>([]);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const openPopup = useCallback(() => {
    setIsPopupOpened(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpened(false);
  }, []);

  const filteredJogs = useMemo(
    () =>
      jogs
        .filter((jog) => (dateFrom ? jog.date > dateFrom.getTime() / 1000 : true))
        .filter((jog) => (dateTo ? jog.date < dateTo.getTime() / 1000 : true)),
    [dateFrom, dateTo, jogs]
  );

  const handleAddJog = useCallback(
    (jog: JogInput) => {
      addJog(jog)
        .then((res) => res.json())
        .then((data) => {
          const newJog: Jog = data.response;
          setJogs((jogs) => [...jogs, { ...newJog, date: new Date(newJog.date).getTime() / 1000 }]);
          closePopup();
        });
    },
    [closePopup]
  );

  useEffect(() => {
    const getJogs = async () =>
      fetchJogs()
        .then((res) => res.json())
        .then((data) => setJogs(data.response.jogs));
    getJogs();
  }, []);

  return (
    <>
      {jogs.length ? (
        <>
          <JogsList jogs={filteredJogs}></JogsList>
          {!isPopupOpened && (
            <OpenPopupButton data-testid="open-popup-button" onClick={openPopup}></OpenPopupButton>
          )}
        </>
      ) : (
        <NoJogs openPopup={openPopup}></NoJogs>
      )}
      {isPopupOpened && <Popup addJog={handleAddJog} closePopup={closePopup}></Popup>}
    </>
  );
};

export default Jogs;
