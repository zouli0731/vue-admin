/**
 *
 * 路由Map
 *
 */
import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'
import {SET_USER_INFO} from 'store/actions/type'
import {request_login, result_code} from 'common/request_api'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

//使用AMD方式加载
// component: resolve => require(['pages/home'], resolve),
const routes = [{
  path: '/',
  name: 'home',
  components: {
    default: require('pages/home'),
  },
  meta: {
    title: "主页",
    auth: true
  }
}, {
  path: '/table/base',
  name: 'tableBase',
  components: {
    default: require('pages/table/base'),
  },
  meta: {
    title: "基本表格",
    auth: true
  }
}, {
  path: '/table/update/:id',
  name: 'tableUpdate',
  components: {
    default: require('pages/table/save'),
  },
  meta: {
    title: "数据修改",
    auth: true
  }
}, {
  path: '/table/add',
  name: 'tableAdd',
  components: {
    default: require('pages/table/save'),
  },
  meta: {
    title: "添加数据",
    auth: true
  }
}, {
  path: '/login',
  name: 'login',
  components: {
    fullView: require('pages/login/login')
  }
}, {
  path: '*',
  name: 'notPage',
  components: {
    fullView: require('pages/error/404')
  }
}]

const router = new VueRouter({
  routes,
  mode: 'history', //default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
const setUserInfo = function (user) {
  store.dispatch(SET_USER_INFO, user)
}

//进行用户登录校验
const getUserInfo = function (next) {
  axios.get(request_login.user_info).then(({data, code}) => {
    if (code === result_code.success) {
      setUserInfo({
        user: data,
        login: true
      })
      next();
    }
  }, (error) => {
    next();
  })
}

//全局路由配置
//路由开始之前的操作
router.beforeEach((to, from, next) => {
    NProgress.start()
    let is_login = store.state.user_info.login
    //在本地存储中登录状态失效的时候,尝试获取请求用户信息接口,判断是是否真的已经退出登录
    if (!is_login) {
      getUserInfo(next)
    } else {
      next()
    }
  }
)

//路由完成之后的操作
router.afterEach(route => {
  NProgress.done()
})

export default router
