import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import '@/index.css'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIdBadge, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { dictionary } from '@/utils/dictionary'
const pinia = createPinia()
const i18n = createI18n(dictionary)
const app = createApp(App)
library.add(faIdBadge)
library.add(faMoon)
library.add(faSun)
app.use(pinia)
app.use(i18n)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
