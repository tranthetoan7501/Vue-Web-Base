<template>
  <div class="">
    <div class="flex items-center justify-center p-2 py-6 m-h-screen w-full">
      <div
        class="bg-white items-center justify-between w-3/5 flex rounded-full shadow-lg p-2 mb-5 dark:bg-yellow-300"
        style="top: 5px"
      >
        <input
          class="font-bold uppercase rounded-full w-full h-10 py-4 pl-4 text-gray-700 dark:bg-yellow-400 dark:text-blue-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          :placeholder="$t('home_search')"
          v-model="searchValue"
          @keyup.enter="handleOnclick"
        />

        <div
          class="bg-sky-600 p-2 hover:bg-sky-400 cursor-pointer mx-2 rounded-full"
          @click="handleOnclick"
        >
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
</template>
<script lang="ts">
export default {
  name: 'SearchBar',
  props: {
    onClickSearch: {
      type: Function as unknown as () => (value: string) => void,
      default: function Log() {
        console.log('Select-action')
      }
    }
  },
  data() {
    return {
      searchValue: '' as string
    }
  },
  methods: {
    handleOnclick() {
      this.onClickSearch(this.searchValue)
    }
  }
}
</script>
