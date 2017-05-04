/**
 *
 * @Date: 2017/3/24 16:50
 *
 */

var Mock = require('mockjs')
var result_code = require('../../src/common/request_api').result_code

// 姓名	性别	年龄	生日	地址

var data_list = [{
  'id|10-100': 1,
  "name": "@cname",
  "sex": "@pick([1, 2])",//1男，2女
  'age|20-25': 20,
  "birthday": "@date('yyyy-MM-dd')",
  "address": "@county(true)",
  "zip": "@zip"
}]


exports.list = Mock.mock({
  code: result_code.success,
  error: null,
  data:{
    "data|15": data_list,
    "totalCount|50-200": 50
  }
})

exports.get = Mock.mock({
  code: result_code.success,
  msg: "获取成功",
  data: data_list[0]
})

exports.del = Mock.mock({
  code: result_code.success,
  msg: "删除成功"
})

exports.save = Mock.mock({
  code: result_code.success,
  msg: "操作成功"
})

exports.batch_del = Mock.mock({
  code: result_code.success,
  msg: "批量删除成功"
})
