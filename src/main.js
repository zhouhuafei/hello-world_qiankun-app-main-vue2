import { registerMicroApps, start, initGlobalState } from 'qiankun'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 微前端 - 注册应用
// 1、entry应该根据环境的不同，进行动态的变更。
// 开发环境还是生产环境？可以使用process.env.NODE_ENV判断。
// uat环境还是pre环境亦或是release环境？可以使用window.location判断。
// 2、entry应该根据部署方式的不同，进行动态的变更。
// 如果是二级域名部署，可以配合window.location判断应该使用哪个域名。
// 如果是二级路由部署，可以直接写死成/child1nginx和/child2nginx。
const isProd = process.env.NODE_ENV === 'production'
registerMicroApps([
  {
    name: 'child1',
    entry: isProd ? '/child1nginx' : '//localhost:7071',
    container: '#container',
    activeRule: '/child1',
    props: {
      mainStore: store
    }
  },
  {
    name: 'child2',
    entry: isProd ? '/child2nginx' : '//localhost:7072',
    container: '#container',
    activeRule: '/child2',
    props: {
      mainStore: store
    }
  }
])

// 微前端 - css沙箱机制
// strictStyleIsolation: true // 使用`shadow DOM`进行隔离
// experimentalStyleIsolation: true // 使用`css域`进行隔离
start({ sandbox: { experimentalStyleIsolation: true } })

// 微前端 - 主子应用通信 - 加if是因为qiankun的v3版本会移除这个api
if (initGlobalState) {
  const state = { a: 1, b: 2 }
  const actions = initGlobalState(state)
  if (actions.onGlobalStateChange) {
    actions.onGlobalStateChange((state, prev) => { // 监听state的变更
      console.log('在主应用中打印变更前的状态：', prev)
      console.log('在主应用中打印变更后的状态：', state)
    })
  }
  setTimeout(() => {
    state.a = 11
    state.b = 22
    if (actions.setGlobalState) {
      actions.setGlobalState(state) // 改变state的状态
    }
    // if (actions.offGlobalStateChange) {
    //   actions.offGlobalStateChange() // 关闭state的监听
    // }
  }, 10000)
  if (actions.onGlobalStateChange) {
    Vue.prototype.$onGlobalStateChange = actions.onGlobalStateChange
  }
  if (actions.setGlobalState) {
    Vue.prototype.$setGlobalState = actions.setGlobalState
  }
}
