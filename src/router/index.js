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
  // 下述路由配置，是为了在主应用中能通过name的形式跳转到子应用。
  {
    path: '/child1/about',
    name: 'Child1About',
    meta: { title: 'Child1About' },
    component: () => import(/* webpackChunkName: "Child1About" */ '@/views/MainPlaceholder.vue')
  },
  {
    path: '/child2/about',
    name: 'Child2About',
    meta: { title: 'Child2About' },
    component: () => import(/* webpackChunkName: "Child2About" */ '@/views/MainPlaceholder.vue')
  },
  // 下述两个路由的配置，目的是为了把子应用的404交给子应用自身处理。
  // 用一个空模板进行占位，防止渲染子应用时，把主应用的404渲染出来。
  {
    path: '/child1', // 不加这个时访问这个路径，主应用会渲染出404。
    name: 'Child1Home',
    meta: { title: 'Child1Home' },
    component: () => import(/* webpackChunkName: "Child1Home" */ '@/views/MainPlaceholder.vue')
  },
  {
    path: '/child1/*', // 如果改成/child1*，访问/child1xxx时，主子应用全是空白。
    name: 'Child1Placeholder',
    meta: { title: 'Child1Placeholder', hidden: true },
    component: () => import(/* webpackChunkName: "Child1Placeholder" */ '@/views/MainPlaceholder.vue')
  },
  {
    path: '/child2', // 不加这个时访问这个路径，主应用会渲染出404。
    name: 'Child2Home',
    meta: { title: 'Child2Home' },
    component: () => import(/* webpackChunkName: "Child2Home" */ '@/views/MainPlaceholder.vue')
  },
  {
    path: '/child2/*', // 如果改成/child2*，访问/child2xxx时，主子应用全是空白。
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
