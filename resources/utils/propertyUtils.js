import { onlyDate } from './dateUtils';

// To obtain current status of the property
export function getStatus(property) {
  if (!property.rentedFrom) return 'Not rented';

  const now = onlyDate(new Date());
  const rentedTo = onlyDate(property.rentedTo);

  if (!rentedTo || rentedTo > now) {
    return 'Currently rented';
  }
  return 'Not rented';
}

// To obtain duration of the rental
export function getRentalDuration(property) {
  if (!property.rentedFrom) return 0; // Has't been rented yet

  const now = onlyDate(new Date());
  const startDate = onlyDate(property.rentedFrom);
  const endDate = onlyDate(property.rentedTo) || now; // Still rented

  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();

  const months = yearDiff * 12 + monthDiff;

  console.log('Start:', startDate);
  console.log('End:', endDate);
  console.log('Year diff:', yearDiff);
  console.log('Month diff:', monthDiff);
  console.log('Months:', months);

  return months > 0 ? months : 0;
}
