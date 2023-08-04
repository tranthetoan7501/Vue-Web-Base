// store/index.js
import { defineStore } from 'pinia'
export const language = localStorage.getItem('language') || import.meta.env.VITE_DEFAULT_LANG
export const useLangStore = defineStore('language', {
  state: () => ({
    language: language
  }),
  getters: {},
  actions: {
    switch() {
      this.language = this.language == 'VI' ? 'EN' : 'VI'
      localStorage.setItem('language', this.language)
    }
  }
})
