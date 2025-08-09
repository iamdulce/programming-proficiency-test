// To obtain current status of the property
export function getStatus(property) {
  if (!property.rentedFrom) return 'Not rented';

  const now = new Date();
  if (!property.rentedTo || new Date(property.rentedTo) > now) {
    return 'Currently rented';
  }
  return 'Not rented';
}

// To obtain duration of the rental
export function getRentalDuration(rentedFrom, rentedTo) {
  if (!rentedFrom) return 0; // Has't been rented yet

  const now = new Date();
  const startDate = new Date(rentedFrom);
  const endDate = rentedTo ? new Date(rentedTo) : now; // Still rented

  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();

  let months = yearDiff * 12 + monthDiff;

  if (dayDiff < 0) {
    months -= 1;
  }

  return months > 0 ? months : 0;
}
