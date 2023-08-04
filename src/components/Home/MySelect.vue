<template>
  <div class="relative inline-flex pl-3 z-10">
    <svg
      class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 412 232"
    >
      <path
        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        fill="#648299"
        fill-rule="nonzero"
      />
    </svg>
    <select
      class="border rounded-full shadow-lg mb-5 font-bold text-gray-600 h-10 pl-5 pr-10 bg-white w-96 dark:text-gray-400 dark:bg-slate-800 hover:border-gray-400 dark:border-slate-800 focus:outline-none appearance-none"
      @change="updateSelectedValue"
      v-model="localSelectedValue"
    >
      <option class="dark:text-gray-400" :key="-1" value="-1">{{ name }}</option>
      <option
        class="dark:text-gray-400"
        v-for="(option, index) in options"
        :key="index"
        :value="option.Id"
      >
        {{ translateName(option) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { useLangStore } from '@/stores/lang'
export default {
  name: 'MySelect',
  props: {
    options: {
      type: Array as any
    },
    selectedValue: {
      type: Number,
      default: -1
    },
    name: {
      type: String,
      default: ''
    },
    onSelectChange: {
      type: Function as unknown as () => (payload: Event) => void,
      default: function Log() {
        console.log('Select-action')
      }
    }
  },
  data() {
    return {
      localSelectedValue: this.selectedValue,
      store: useLangStore()
    }
  },
  methods: {
    updateSelectedValue() {
      this.$emit('update:selectedValue', this.localSelectedValue)
    },
    translateName(item: any) {
      if (this.store.language == 'EN') {
        return item.NameEn
      }
      return item.Name
    }
  }
}
</script>
<style>
.w-100 {
  width: 26rem;
}
</style>
