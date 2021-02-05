import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
const { isDev } = require('../../build')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: isDev ? process.env.BASE_URL : '/',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
