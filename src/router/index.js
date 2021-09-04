import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index.vue'
import Error from '@/pages/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    layout: 'default',
  },
  {
    path: '/cart/',
    component: () => import('@/pages/Cart/Index.vue'),
    layout: 'fluid',
  },
  {
    path: '/:catchAll(.*)',
    component: Error,
    layout: 'tung',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
