/**
 *
 * @intro: axios配置.
 *
 * @Date: 2017/4/27 17:48.
 *
 */

//导入模块
import axios from 'axios'
import {result_code} from 'common/request_api'
import router from 'src/router'
import store from 'store'
import {SET_USER_INFO} from 'store/actions/type'

//设置用户信息action
const setUserInfo = function (user) {
  store.dispatch(SET_USER_INFO, user)
}

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  let $vue = Vue.prototype || Vue

  //设置默认根地址
  axios.defaults.baseURL = '/'
  //设置请求超时设置
  axios.defaults.timeout = 2000
  //设置请求时的header
  axios.defaults.headers = {}

  /**  * 添加响应拦截器
   */
  axios.interceptors.response.use(response => {
    //成功时
    let responseData = response.data
    let dataCode = responseData.code
    let dataError = responseData.error
    let dataResult = responseData.data
    if (dataCode === result_code.success) {
      return Promise.resolve(responseData)
    } else if (dataCode === result_code.unlogin) {
      setUserInfo(null)
      router.replace({name: "login"})
      return
    }
    $vue.$message.warning(dataError)
    return Promise.reject(responseData)
  }, error => {
    //错误时
    if (error.response) {
      let resError = error.response
      let resCode = resError.status
      let resMsg = error.message
      $vue.$message.error('操作失败！错误原因 ' + resMsg)
      return Promise.reject({code: resCode, msg: resMsg})
    }
  });

  //设置axios到Vue上
  Vue.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },
    $http: {
      get() {
        return axios
      }
    }
  })
}

export default {
  install
}
