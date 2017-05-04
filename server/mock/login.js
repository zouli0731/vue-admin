/**
 *
 * @Date: 2017/3/21 10:55
 *
 */

var Mock = require('mockjs')
var result_code = require('../../src/common/request_api').result_code

exports.login = Mock.mock({
  code: result_code.success,
  msg: "登录成功",
  data: {
    'name': '@cname',
    'avatar': 'https://avatars0.githubusercontent.com/u/16893554?v=3&s=240',
    'age|20-25': 20,
    'desc': '@csentence()'
  }
})

exports.user_info = Mock.mock({
  code: result_code.success,
  msg: "成功",
  data: {
    'name': '@cname',
    'avatar': 'https://avatars0.githubusercontent.com/u/16893554?v=3&s=240',
    'age|20-25': 20,
    'desc': '@csentence()'
  }
})

exports.login_error = Mock.mock({
  code: result_code.error,
  msg: "账号或密码错误"
})

exports.logout = Mock.mock({
  code: result_code.success,
  msg: "退出成功"
})
