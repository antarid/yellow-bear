const baseUrl = 'https://jogtracker.herokuapp.com/api/v1';

export const tryAuth = () =>
  fetch(`${baseUrl}/auth/uuidLogin`, {
    method: 'POST',
    body: JSON.stringify({ uuid: 'hello' }),
  });
