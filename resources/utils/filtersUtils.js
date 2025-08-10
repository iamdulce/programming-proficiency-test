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

    // By rented from date
    if (filters.rentedFrom && new Date(prop.rentedFrom) < new Date(filters.rentedFrom)) {
      return false;
    }

    // By rented to date
    if (filters.rentedTo && new Date(prop.rentedTo) > new Date(filters.rentedTo)) {
      return false;
    }
    return true;
  });
}
