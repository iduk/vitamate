import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue'
import PageNotFound from '@/pages/Error.vue'
import Login from '@/pages/Auth/Login.vue'
import Logout from '@/pages/Auth/Logout.vue'

Vue.use(VueRouter)

const routes = [
  // redirect
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/test',
    component: () => import('@/pages/Test.vue'),
    meta: { layout: 'layout-tung' },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'layout-fluid', authRequired: true },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: { layout: 'layout-fluid' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { layout: 'layout-default' },
  },
  {
    path: '/dtc',
    name: 'DTC',
    component: () => import('@/pages/Dtc/Index.vue'),
    meta: { layout: 'layout-sidebar' },
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('@/pages/Survey/Index.vue'),
    meta: { layout: 'layout-fluid' },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/Products/Index.vue'),
    meta: { layout: 'layout-fluid' },
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('@/pages/Mypage/Index.vue'),
    meta: { layout: 'layout-sidebar' },
    children: [
      {
        path: '/userinfo',
        name: 'UserInfo',
        component: () => import('@/pages/Mypage/UserInfo.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/pages/Mypage/Order.vue'),
      },
      {
        path: '/point',
        name: 'Point',
        component: () => import('@/pages/Mypage/Point.vue'),
      },
    ],
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/News/Index.vue'),
    meta: { layout: 'layout-sidebar' },
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/pages/Support/Index.vue'),
    meta: { layout: 'layout-sidebar' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/pages/Cart/Index.vue'),
    meta: { layout: 'layout-default' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: PageNotFound,
    meta: { layout: 'layout-tung', requiresAuth: false },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
