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
  }
])
start()
