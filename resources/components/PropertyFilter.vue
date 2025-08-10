<template>
  <div>
    <h3>Filter by</h3>

    <div>
      <div>
        <label for="type-select">Property Type:</label>
        <select id="type-select" v-model="selectedType" @change="emitFilter">
          <option value=""> All Types</option>
          <option v-for="type in propertyTypes" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="user-select">Owner:</label>
        <select id="user-select" v-model="selectedUser" @change="emitFilter">
          <option value="">All Owners</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Rented From:</label>
        <input type="date" v-model="rentedFrom" @change="emitFilter"/>
      </div>
      <div>
        <label>Rented To:</label>
        <input type="date" v-model="rentedTo" @change="emitFilter"/>
      </div>
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
  methods: {
    emitFilter() {
      this.$emit('filter-changed', {
        type: this.selectedType,
        user: this.selectedUser,
        rentedFrom: this.rentedFrom,
        rentedTo: this.rentedTo,
      });
    },
  },
};
</script>
