<template>
  <header class="fixed top-0 left-0 right-0 bg-yellow-300 dark:bg-slate-800 z-30">
    <div class="flex justify-between items-center w-[92%] mx-auto">
      <div class="flex items-center h-16">
        <img class="w-16 h-10 cursor-pointer" src="@/assets/ivb_logo_color.svg" alt="..." />
      </div>
      <div
        class="nav-links duration-500 md:static absolute bg-yellow-300 dark:bg-slate-800 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
      >
        <div
          class="flex md:flex-row flex-col md:items-center gap-2 font-rowdies text-sky-700 text-2xl dark:text-yellow-300"
        >
          <!-- <font-awesome-icon :icon="['fas', 'id-badge']" /> -->
          {{ $t('home_home_page_name') }}
          <!-- <font-awesome-icon :icon="['fas', 'id-badge']" /> -->
        </div>
      </div>
      <div class="flex items-center gap-6">
        <img :src="langFlag" class="h-10 rounded-full" @click="switchLang" />
        <button class="bg-transparent text-2xl w-3" @click="switchDarkMode">
          <font-awesome-icon class="text-gray-100" v-if="isDark" :icon="['fas', 'moon']" />
          <font-awesome-icon class="text-sky-700" v-else :icon="['fas', 'sun']" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import engFlag from '@/assets/EN.png'
import vnFlag from '@/assets/VN.png'
import { useLangStore } from '@/stores/lang'
import { useDark } from '@vueuse/core'

let isDark = useDark()
export default {
  data() {
    return {
      flag: useLangStore().language == 'VI' ? vnFlag : engFlag,
      store: useLangStore(),
      isDark: isDark
    }
  },
  mounted() {
    const isLightValue = localStorage.getItem('isDark')
    if (isLightValue === 'true') {
      this.isDark = true
    } else {
      this.isDark = false
    }
  },
  computed: {
    langFlag() {
      return this.store.language == 'VI' ? vnFlag : engFlag
    }
  },

  methods: {
    switchLang() {
      this.store.switch()
      this.$i18n.locale = this.store.language
    },
    switchDarkMode() {
      console.log('hi')
      this.isDark = !this.isDark
      localStorage.setItem('isDark', this.isDark.toString())
    }
  }
}

console.log('isDark', isDark.value)
</script>
<style>
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.logo {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
}
.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
}
.nav-links li {
  margin-left: 1rem;
}
.nav-links li a {
  color: #fff;
  text-decoration: none;
}
</style>
