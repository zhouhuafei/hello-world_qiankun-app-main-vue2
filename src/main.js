import { registerMicroApps, start } from 'qiankun'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 1、entry应该根据环境的不同，进行动态的变更。
// 开发环境还是生产环境？可以使用process.env.NODE_ENV判断。
// uat环境还是pre环境亦或是release环境？可以使用window.location判断。
// 2、entry应该根据部署方式的不同，进行动态的变更。
// 如果是独立域名部署，可以配合window.location判断应该使用哪个域名。
// 如果是二级路由部署，可以直接写死成/child1nginx和/child2nginx。
registerMicroApps([
  {
    name: 'child1',
    entry: '//localhost:7071',
    container: '#container',
    activeRule: '/child1',
    props: {
      mainStore: store
    }
  },
  {
    name: 'child2',
    entry: '//localhost:7072',
    container: '#container',
    activeRule: '/child2',
    props: {
      mainStore: store
    }
  }
])
// css沙箱机制
// strictStyleIsolation: true // 使用`shadow DOM`进行隔离
// experimentalStyleIsolation: true // 使用`css域`进行隔离
start({ sandbox: { experimentalStyleIsolation: true } })
