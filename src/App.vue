<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="pt-20 px-20 bg-gray-100">
    <RouterView />
  </div>
</template>
<style scoped>
.active {
  color: green;
}
</style>
