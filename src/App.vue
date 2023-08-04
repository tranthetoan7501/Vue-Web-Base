<template>
  <div>
    <AppHeader />
    <div class="p-abs bg-gray-100 h-100 dark:bg-blue-900">
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
.p-abs {
  padding: 60px 40px 462px 40px;
}
</style>
