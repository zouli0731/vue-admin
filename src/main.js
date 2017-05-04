/**
 *
 * 主程序入口
 *
 */
//导入样式
import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-default/index.css'
//导入Vue框架
import Vue from 'vue'
//导入element组件
import ElementUI from 'element-ui'
//导入请求框架
import request from './request'
//导入路由组件
import router from './router'
//导入状态管理器
import store from 'store'
//导入自定义插件
import Plugins from 'plugins'
//导入主视图文件
import App from './App'
//使用element-ui
Vue.use(ElementUI)

//使用自定义插件
Vue.use(Plugins)

//使用request
Vue.use(request)

//发布后是否显示提示
Vue.config.productionTip = false

//是否开启工具调试
// Vue.config.devtools = false

new Vue({
  router,
  store,
  ...App
}).$mount('mainbody')

