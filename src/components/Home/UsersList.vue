<template>
  <div>
    <div class="flex items-center px-5 pl-10 py-2">
      <span class="w-3/12">
        <span class="text-base uppercase text-gray-600 dark:text-gray-400 font-bold">{{
          $t('home_contact_info')
        }}</span>
      </span>
      <span class="w-4/12">
        <span class="text-base uppercase text-gray-600 dark:text-gray-400 font-bold">{{
          $t('home_workplace')
        }}</span>
      </span>
      <span class="w-2/12">
        <span class="text-base uppercase text-gray-600 dark:text-gray-400 font-bold">{{
          $t('home_phone')
        }}</span>
      </span>
      <span class="w-2/12">
        <span class="text-base uppercase text-gray-600 dark:text-gray-400 font-bold">{{
          $t('home_mobile')
        }}</span>
      </span>
      <span>
        <span class="text-base uppercase text-gray-600 dark:text-gray-400 font-bold">{{
          $t('home_email')
        }}</span>
      </span>
    </div>
    <div v-if="isLoading" class="flex items-center justify-center p-20">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
    </div>

    <div
      v-else
      v-for="(item, key) in items"
      :key="key"
      class="hover:bg-sky-50 dark:hover:bg-blue-800 cursor-pointer bg-white shadow-lg flex p-4 pl-10 items-center mb-5 rounded-lg dark:bg-slate-800"
    >
      <div class="w-3/12">
        <div class="flex items-center">
          <img :src="modifyUrl(item.Avatar)" class="h-10 rounded-full" />
          <div class="ml-4">
            <span class="capitalize text-gray-800 dark:text-white font-bold">{{ item.Name }} </span>

            <span :class="'block text-base ' + positionType(item.PosittionId)">
              {{ translate(item, 'PosittionName') }}
            </span>
          </div>
        </div>
      </div>
      <div class="w-4/12">
        <span class="text-base block font-bold text-gray-600 dark:text-slate-400">{{
          translate(item, 'DepartmentName')
        }}</span>
        <span class="text-base block font-bold text-gray-600 dark:text-slate-400">{{
          translate(item, 'UnitName')
        }}</span>
      </div>
      <div class="w-2/12">
        <span class="capitalize text-gray-600 text-sm font-bold dark:text-slate-400">{{
          item.PhoneBranch
        }}</span>
        <span class="capitalize block text-gray-600 text-sm font-bold dark:text-slate-400">
          {{ item.Phone ? +item.Phone : '' }}</span
        >
      </div>
      <div class="w-1/12">
        <span class="capitalize text-gray-600 text-sm font-bold dark:text-slate-400">{{
          item.Mobile
        }}</span>
      </div>
      <div>
        <span class="text-gray-600 font-bold text-sm dark:text-slate-400">{{ item.Email }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { User } from '@/types/index'
import defaultAvatar from '@/assets/profile.png'
import { useLangStore } from '@/stores/lang'
export default {
  name: 'UersList',
  props: {
    items: {
      type: Array as () => User[],
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      defaultAvatar: defaultAvatar,
      store: useLangStore()
    }
  },
  methods: {
    translate(item: User, name: keyof User) {
      if (this.store.language == 'EN') {
        name += 'En'
      }
      return item[name]
    },
    positionType(positionId: number) {
      switch (positionId) {
        case 5047:
          return 'text-red-400 dark:text-red-400'
        case 5048:
          return 'text-blue-400 dark:text-blue-300'
        case 5050:
          return 'text-green-400 dark:text-green-300'
        case 5052:
          return 'text-violet-400 dark:text-violet-400 '
        case 5068:
          return 'text-yellow-500 dark:text-yellow-400 '
        case 5087:
          return 'text-yellow-500 dark:text-yellow-400 '
        default:
          return 'text-violet-500 dark:text-violet-400'
      }
    },
    modifyUrl(url: string | null) {
      return url ? import.meta.env.VITE_AVATAR_BASE_URL + url : defaultAvatar
    }
  }
}
</script>
