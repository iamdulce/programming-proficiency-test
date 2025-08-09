<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Owner</th>
        <th>Status</th>
        <th>Rental Duration</th>
      </tr>
    </thead>
    <tbody>
      <PropertyItem
        v-for="property in properties"
        :key="property.id"
        :property="property"
        :propertyTypes="propertyTypes"
        :users="users"
      />
    </tbody>
  </table>
</template>
<script setup>
import PropertyItem from './PropertyItem.vue';

defineProps({
  users: Array,
  propertyTypes: Array,
  properties: Array,
});
</script>
