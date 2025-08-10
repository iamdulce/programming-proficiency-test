<template>
  <div>
    <table class="hidden md:table w-full border-collapse border border-gray-300">
      <thead>
        <tr class="border-b">
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left" >Name</th>
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left">Type</th>
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left">Owner</th>
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left">Status</th>
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left">Rental Duration</th>
          <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left">Dates</th>
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

    <!-- Mobile view -->
    <div class="block md:hidden space-y-4">
      <PropertyItem
        v-for="property in properties"
        :key="property.id"
        :property="property"
        :propertyTypes="propertyTypes"
        :users="users"
        view="card"
      />
    </div>
  </div>
</template>
<script setup>
import PropertyItem from './PropertyItem.vue';

defineProps({
  users: Array,
  propertyTypes: Array,
  properties: Array,
});
</script>
