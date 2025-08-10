<template>
  <div id="app" class="container mx-auto px-4 py-8">
    <PropertyTableView />
  </div>
</template>

<script>
import PropertyTableView from '@/views/PropertyTableView.vue';

export default {
  name: 'App',
  components: {
    PropertyTableView,
  },
};
</script>
