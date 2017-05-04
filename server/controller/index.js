/**
 *
 * @Date: 2017/3/21 10:49
 *
 */

var express = require('express')
var apiRouter = express.Router()

require('./login')(apiRouter)
require('./table')(apiRouter)

module.exports = apiRouter
