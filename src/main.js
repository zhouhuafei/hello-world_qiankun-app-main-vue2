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

registerMicroApps([
  {
    name: 'child1',
    entry: '//localhost:7071',
    container: '#container',
    activeRule: '/child1'
  },
  {
    name: 'child2',
    entry: '//localhost:7072',
    container: '#container',
    activeRule: '/child2'
  }
])
// css沙箱机制
// strictStyleIsolation: true // 使用`shadow DOM`进行隔离
// experimentalStyleIsolation: true // 使用`css域`进行隔离
start({ sandbox: { experimentalStyleIsolation: true } })
