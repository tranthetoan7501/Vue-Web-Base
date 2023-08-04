<template>
  <div>
    <AppHeader />
    <div class="p-10 pt-20 bg-gray-100 dark:bg-blue-900">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>
<style scoped>
.active {
  color: green;
}
</style>
