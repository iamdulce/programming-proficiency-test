export function onlyDate(date) {
  if (!date) return null;
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function formatDate(date) {
  if (!date) return null;

  return date.toLocaleDateString('default', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
