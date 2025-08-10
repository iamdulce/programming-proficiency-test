<template>
  <tr v-if="view === 'table'" class="border-b border-gray-200">
    <td class="border border-gray-300 px-4 py-2">
      {{ property.name }}
    </td>
    <td class="border border-gray-300 px-4 py-2">
      {{ propertyTypeName }}
    </td>
    <td class="border border-gray-300 px-4 py-2">
      {{ userName }}
    </td>
    <td class="border border-gray-300 px-4 py-2">
      <span :class="statusClasses(getStatus(property))">
        {{ getStatus(property) }}
      </span>
    </td>
    <td class="border border-gray-300 px-4 py-2">
      {{ getRentalDuration(property) }} months</td>
    <td class="border-b border-gray-300 px-4 py-2 flex flex-col">
      <span>{{ rentalDates.from }} </span>
      <span>{{ rentalDates.to }} </span>
    </td>
  </tr>

  <!-- Mobile view -->
  <div
    v-else
    class="border rounded-lg p-4 shadow"
  >
    <h3 class="text-lg font-semibold mb-2">{{ property.name }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
      <div><span class="font-semibold">Type: </span>{{ propertyTypeName }}</div>
      <div><span class="font-semibold">Owner: </span>{{ userName }}</div>
      <div>
        <span class="font-semibold">Status: </span>
        <span :class="statusClasses(getStatus(property))">
          {{ getStatus(property) }}
        </span>
      </div>
      <div>
        <span class="font-semibold">Rental Duration:</span>
        {{ getRentalDuration(property) }} months
      </div>
      <div><span class="font-semibold">{{ rentalDates.from }}</span></div>
      <div><span class="font-semibold">{{ rentalDates.to }}</span></div>
    </div>
  </div>

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
    view: {
      type: String,
      default: 'table',
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

    statusClasses(statusText) {
      if (statusText === 'Currently rented') {
        return 'bg-green-100 text-green-800 font-semibold px-2 py-1 rounded';
      }
      if (statusText === 'Not rented') {
        return 'bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded';
      }
      return '';
    },
  },
};
</script>
