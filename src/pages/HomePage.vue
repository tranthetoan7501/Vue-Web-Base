<template>
  <div class="container mx-auto">
    <div class="">
      <div class="flex flex-col p-2 py-6 m-h-screen">
        <div
          class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5"
          style="top: 5px"
        >
          <input
            class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Search"
          />

          <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
            <svg
              class="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center px-5 py-2">
        <span class="w-1/6 text-center">
          <input type="checkbox" />
        </span>
        <span class="w-1/2">
          <span class="text-xs uppercase text-gray-600 font-bold">Contact Info</span>
        </span>
        <span class="w-1/4">
          <span class="text-xs uppercase text-gray-600 font-bold">Gender</span>
        </span>
        <span class="w-1/4">
          <span class="text-xs uppercase text-gray-600 font-bold">Age</span>
        </span>
        <span class="w-1/4">
          <span class="text-xs uppercase text-gray-600 font-bold">Address</span>
        </span>
      </div>

      <div
        v-for="(user, key) in users"
        :key="key"
        class="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
      >
        <div class="w-1/6 text-center"><input type="checkbox" /></div>
        <div class="w-1/2">
          <div class="flex items-center">
            <img src="@/assets/profile.png" class="h-10 rounded-full" />
            <div class="ml-4">
              <span class="capitalize block text-gray-800">{{ user.name }}</span>
              <span class="text-sm block text-gray-600">{{ user.department }}</span>
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <span class="capitalize text-gray-600 text-sm">{{
            key % 2 == 0 ? 'male' : 'female'
          }}</span>
        </div>
        <div class="w-1/4">
          <span class="capitalize text-gray-600 text-sm">{{ user.age }}</span>
        </div>
        <div class="w-1/4">
          <span class="text-gray-600 text-sm">{{ user.address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getUser } from '@/api/userApi'
import type { User, ApiResponse } from '@/types/index'

export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      users: [] as User[]
    }
  },
  async mounted() {
    try {
      const response: ApiResponse = await getUser()
      console.log(response)
      this.users = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style></style>
