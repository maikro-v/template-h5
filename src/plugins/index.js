import 'h5-rem'
// 动画库
import 'animate.css'
import _ from 'lodash'
// vant ui框架
import Vant from 'vant'
import 'vant/lib/index.css'

export default (Vue) => {
  Vue.prototype.$_ = _
  Vue.use(Vant)
}
