<template>
  <div>
    <h1>Lista de propiedades</h1>
    <PropertyList :users="users" :propertyTypes="propertyTypes" :properties="properties" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import PropertyList from '../components/PropertyList.vue';
import { getUsers, getPropertyTypes, getProperties } from '../services/propertyService';

const users = ref([]);
const propertyTypes = ref([]);
const properties = ref([]);

onMounted(() => {
  users.value = getUsers();
  propertyTypes.value = getPropertyTypes();
  properties.value = getProperties();
});
</script>
