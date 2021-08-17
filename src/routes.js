import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/home'
import About from '@/pages/about'
import notFound from '@/pages/notFound'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/:catchAll(.*)',
    component: notFound,
    name: '404',
  },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router