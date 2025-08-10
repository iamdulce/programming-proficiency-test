<template>
  <div class="main">
    <h1>List of properties</h1>
    <PropertyFilter
      :users="users"
      :propertyTypes="propertyTypes"
      @filter-changed="handleFilterChange"
    />
    <PropertyList
    :users="users"
    :propertyTypes="propertyTypes"
    :properties="filteredProperties"/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

import PropertyList from '../components/PropertyList.vue';
import PropertyFilter from '../components/PropertyFilter.vue';
import { getUsers, getPropertyTypes, getProperties } from '../services/propertyService';
import customFilterProps from '../utils/filters';

const users = ref([]);
const propertyTypes = ref([]);
const properties = ref([]);
const filters = ref({ type: '' });

const filteredProperties = computed(() => {
  const propertyValue = properties.value;
  const filterValue = filters.value;
  return customFilterProps(propertyValue, filterValue);
});

function handleFilterChange(newFilters) {
  filters.value = { ...filters.value, ...newFilters };
}

onMounted(() => {
  users.value = getUsers();
  propertyTypes.value = getPropertyTypes();
  properties.value = getProperties();
});
</script>
