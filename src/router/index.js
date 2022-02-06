import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // 下述两个路由的配置，目的是为了把子应用的404交给子应用自身处理。
  // 用一个空模板占位符进行占位，防止渲染子应用时，把主应用的404渲染出来。
  {
    path: '/child1/*',
    name: 'Child1Placeholder',
    meta: { title: 'Child1Placeholder', hidden: true },
    component: () => import(/* webpackChunkName: "Child1Placeholder" */ '@/views/MainPlaceholder.vue')
  },
  {
    path: '/child2/*',
    name: 'Child2Placeholder',
    meta: { title: 'Child2Placeholder', hidden: true },
    component: () => import(/* webpackChunkName: "Child2Placeholder" */ '@/views/MainPlaceholder.vue')
  },
  // 主应用的404。
  {
    path: '*',
    name: '404',
    meta: { title: '404', hidden: true },
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
