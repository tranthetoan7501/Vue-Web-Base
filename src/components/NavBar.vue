<template>
  <header class="fixed top-0 left-0 right-0 bg-yellow-300 z-30">
    <div class="flex justify-between items-center w-[92%] mx-auto">
      <div class="flex items-center h-16">
        <img class="w-16 h-10 cursor-pointer" src="@/assets/ivb_logo_color.svg" alt="..." />
      </div>
      <div
        class="nav-links duration-500 md:static absolute bg-yellow-300 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
      >
        <div class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <RouterLink
            v-for="(item, index) in routes"
            :key="index"
            :to="item.path"
            class="text-sky-800 hover:text-sky-600"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
      <div class="flex items-center gap-6">
        <button class="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-400">
          Sign in
        </button>
        <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer md:hidden"
        ></ion-icon>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterLink } from 'vue-router'
import { routes } from '@/router/index'

export default {
  data() {
    return { routes: routes as any }
  }
}
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
@/router/lang
