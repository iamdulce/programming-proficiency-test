<template>
  <div class="p-4 bg-green-50 rounded space-y-6">
    <div>
      <h2 class="text-lg font-bold text-gray-700 mb-2">Filter by</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="filter-group">
          <label
            for="type-select"
            class="block mb-1 font-semibold"
            >
            Property Type:
          </label>
          <select
            id="type-select"
            v-model="selectedType"
            @change="emitFilter"
            class="w-full p-2 border rounded-md"
            >
            <option value=""> All Types</option>
            <option v-for="type in propertyTypes" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label
            for="user-select"
            class="block mb-1 font-semibold"
            >
            Owner:
          </label>
          <select
            id="user-select"
            v-model="selectedUser"
            @change="emitFilter"
            class="w-full border border-gray-300 rounded px-2 py-2"
            >
            <option value="">All Owners</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label class="block mb-1 font-semibold">Rented From:</label>
          <input
            type="date"
            v-model="rentedFrom"
            @change="emitFilter"
            class="w-full border border-gray-300 rounded px-2 py-1"
            />
        </div>
        <div class="filter-group">
          <label class="block mb-1 font-semibold">Rented To:</label>
          <input
          type="date"
          v-model="rentedTo"
          @change="emitFilter"
          class="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-bold text-gray-700 mb-2">Show:</h2>
      <div class="flex space-x-4">
        <label>
          <input
            type="radio"
            value=""
            v-model="selectedStatus"
            @change="emitFilter"
            class="mr-2"
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Currently rented"
            v-model="selectedStatus"
            @change="emitFilter"
            class="mr-2"
          />
          Currently rented
        </label>
        <label>
          <input
            type="radio"
            value="Not rented"
            v-model="selectedStatus"
            @change="emitFilter"
            class="mr-2"
          />
          Not rented
        </label>
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
      selectedStatus: '',
    };
  },
  methods: {
    emitFilter() {
      this.$emit('filter-changed', {
        type: this.selectedType,
        user: this.selectedUser,
        rentedFrom: this.rentedFrom,
        rentedTo: this.rentedTo,
        status: this.selectedStatus,
      });
    },
  },
};
</script>
