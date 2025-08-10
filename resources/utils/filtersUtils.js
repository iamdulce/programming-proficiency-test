import { onlyDate } from './dateUtils';

export default function customFilterProps(properties, filters) {
  return properties.filter((prop) => {
    // By type
    if (filters.type && prop.typeId !== Number(filters.type)) {
      return false;
    }

    // By user
    if (filters.user && prop.userId !== Number(filters.user)) {
      return false;
    }

    if (filters.rentedFrom) {
      const propDate = onlyDate(prop.rentedFrom);
      const filterDate = onlyDate(filters.rentedFrom);
      if (!propDate) return false;
      if (propDate < filterDate) return false;
    }

    // By rented to date
    if (filters.rentedTo) {
      const propDate = onlyDate(prop.rentedTo);
      const filterDate = onlyDate(filters.rentedTo);
      if (!propDate) return false;
      if (propDate > filterDate) return false;
    }

    return true;
  });
}
