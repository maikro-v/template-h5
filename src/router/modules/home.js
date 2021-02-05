export default [
  {
    path: '/',
    name: '_home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页'
    }
  }
]
