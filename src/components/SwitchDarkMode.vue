<!-- DarkModeButton.vue -->
<template>
  <button class="bg-gray-900 dark:bg-gray-100" @click="toggleDark()">Switch</button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// Named export for the variables
</script>
