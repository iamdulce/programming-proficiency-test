<template>
  <div id="app">
    WORK HERE
    <PropertyTableView />
  </div>
</template>

<!-- <script>
import { users, propertyTypes, properties } from '@/mocks/api';

export default {
  name: 'App',
  data: () => ({
    users,
    propertyTypes,
    properties,
  }),
};
</script> -->
<script>
import PropertyTableView from '@/views/PropertyTableView.vue';

export default {
  name: 'App',
  components: {
    PropertyTableView,
  },
};
</script>
