import { JogInput } from './interfaces';
import { formatDate } from './utils';
const baseUrl = 'https://jogtracker.herokuapp.com/api/v1';

export const tryAuth = () =>
  fetch(`${baseUrl}/auth/uuidLogin`, {
    method: 'POST',
    body: JSON.stringify({ uuid: 'hello' }),
  });

export const fetchJogs = () =>
  fetch(`${baseUrl}/data/sync`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export const addJog = (jog: JogInput) => {
  return fetch(`${baseUrl}/data/jog`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'POST',
    body: JSON.stringify({ ...jog, date: formatDate(jog.date) }),
  });
};
