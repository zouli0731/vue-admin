/**
 *
 * 自定义插件
 *
 * @Date: 2017/3/23 18:29
 *
 */
import dateFormat from 'plugins/date'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $dateFormat: {
      value: dateFormat
    }
  })
}

export default {
  install
}
