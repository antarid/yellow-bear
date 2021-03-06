export const formatDate = (time: number): string => {
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
