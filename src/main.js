import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from '@/plugins'
import apis from '@/api'
import '@/styles/index.scss'

// 注册api
Vue.use(apis)
// 注册插件和一些工具库
Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
