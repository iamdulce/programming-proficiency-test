<template>
  <tr>
    <td>{{ property.name }}</td>
    <td>{{ propertyTypeName }}</td>
    <td>{{ userName }}</td>
    <td>{{ getStatus(property) }}</td>
    <td>{{ getRentalDuration(property) }}</td>
    <td>
      <span>{{ rentalDates.from }} </span>
      <span>{{ rentalDates.to }} </span>
    </td>
  </tr>
</template>
<script>
import { getStatus, getRentalDuration, getFormattedRentalDates } from '../utils/propertyUtils';

export default {
  name: 'PropertyItem',
  props: {
    users: {
      type: Array,
      required: true,
    },
    propertyTypes: {
      type: Array,
      required: true,
    },
    property: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userName() {
      const user = this.users.find((u) => u.id === this.property.userId);
      return user ? user.name : 'Anonimous';
    },
    propertyTypeName() {
      const type = this.propertyTypes.find((t) => t.id === this.property.typeId);
      return type ? type.name : 'Unknown';
    },
    rentalDates() {
      return getFormattedRentalDates(this.property);
    },
  },
  methods: {
    getStatus,
    getRentalDuration,
  },
};
</script>
