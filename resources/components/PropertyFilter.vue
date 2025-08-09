<template>
  <div>
    <h3>Filter Properties</h3>

    <div>
      <label for="type-select">Property Type:</label>
      <select id="type-select" v-model="selectedType">
        <option value=""> All Types</option>
        <option v-for="type in propertyTypes" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>
    </div>

    <div>
      <label for="user-select">Owner:</label>
      <select id="user-select" v-model="selectedUser">
        <option value="">All Owners</option>
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>

    <div>
      <label>Rented From:</label>
      <input type="date" v-model="rentedFrom" />
    </div>

    <div>
      <label>Rented To:</label>
      <input type="date" v-model="rentedTo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyFilter',
  props: {
    propertyTypes: Array,
    users: Array,
  },
  data() {
    return {
      selectedType: '',
      selectedUser: '',
      rentedFrom: '',
      rentedTo: '',
    };
  },
};
</script>
