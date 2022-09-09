import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import UsersList from '../views/UsersList.vue'
import AboutView from '../views/About.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/users',
      name: 'user',
      component: UsersList
    },

  ]
})

export default router
