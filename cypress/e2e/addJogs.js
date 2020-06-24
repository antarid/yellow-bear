const formatDate = (time) => {
  const date = new Date(time);
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(
    date
  );
  return `${day}.${month}.${year}`;
};

const createRandomJog = () => ({
  distance: Math.floor(Math.random() * 100),
  time: Math.floor(Math.random() * 100),
  date: formatDate(Math.floor(Math.random() * Date.now())),
});

it('should login and add jog', () => {
  const { distance, time, date } = createRandomJog();
  cy.visit('/');
  cy.findByRole('button', { name: /let me in/i }).click();
  cy.findByTestId('open-popup-button').click();
  cy.findByTestId('distance-input').type(distance);
  cy.findByTestId('time-input').type(time);
  cy.findByTestId('date-input').type(date);
  cy.findByTestId('time-input').click();
  cy.findByRole('button', { name: /save/i }).click();
  cy.findByTestId(`${date}-${distance}-${time}`).should('be.visible');
});
