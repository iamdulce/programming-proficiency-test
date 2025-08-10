import { onlyDate } from './dateUtils';
import { getStatus } from './propertyUtils';

export function customFilterProps(properties, filters) {
  return properties.filter((prop) => {
    // By type
    if (filters.type && prop.typeId !== Number(filters.type)) {
      return false;
    }

    // By user
    if (filters.user && prop.userId !== Number(filters.user)) {
      return false;
    }

    // By rentedFrom
    if (filters.rentedFrom) {
      const propDate = onlyDate(prop.rentedFrom);
      const filterDate = onlyDate(filters.rentedFrom);
      if (!propDate) return false;
      if (propDate < filterDate) return false;
    }

    // By rentedTo date
    if (filters.rentedTo) {
      const propDate = onlyDate(prop.rentedTo);
      const filterDate = onlyDate(filters.rentedTo);
      if (!propDate) return false;
      if (propDate > filterDate) return false;
    }

    // By status
    if (filters.status && getStatus(prop) !== filters.status) {
      return false;
    }

    return true;
  });
}

export function loadFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filters = {};

  if (params.get('user')) {
    filters.user = Number(params.get('user'));
  }
  if (params.get('type')) {
    filters.type = Number(params.get('type'));
  }

  return filters;
}
