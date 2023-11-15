export function CheckDatesValid(startDate, endDate) {
  const start = Date.parse(startDate);
  const end = Date.parse(endDate);

  return (end > start ? true : false)
}