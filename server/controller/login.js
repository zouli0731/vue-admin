/**
 *
 * @Date: 2017/3/21 10:50
 *
 */
var mock = require('../mock/login')
var uri = require('../../src/common/request_api').request_login

module.exports = function (apiRouter) {
  //登录
  apiRouter.post(uri.login, function (req, res) {
    setTimeout(function () {
      var username = req.body.username;
      var password = req.body.password;
      if (username === 'admin' && password === 'admin') {
        res.json(mock.login)
      } else {
        res.json(mock.login_error)
      }
    }, 1000)
  });
  //登出
  apiRouter.post(uri.logout, function (req, res) {
    setTimeout(function () {
      res.json(mock.logout)
    }, 1000)
  });
}
