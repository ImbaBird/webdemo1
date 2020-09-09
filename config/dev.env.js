'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://60.12.95.62:8888"'
  // 60.12.95.62:8888
  // 192.168.3.9
})