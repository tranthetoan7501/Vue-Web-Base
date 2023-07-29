import { createRouter, createWebHashHistory } from 'vue-router'
import Input from '@/pages/Input.vue'
import Home from '@/pages/HomePage.vue'
import TodoList from '@/pages/TodoList.vue'
export const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/input', component: Input, name: 'Input' },
  { path: '/todoList', component: TodoList, name: 'TodoList' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
