// fork from https://github.com/LingyuCoder/express-mock-middleware
// 直接从上面的那个git仓库fork下来，方便以后可以调整

var path = require('path')
var Gaze = require('gaze')
var Glob = require('glob')
var chalk = require('chalk')
var express = require('express')

var defaultConfig = {
  glob: 'mock/**/*.js'
}

var mockApp = express()

module.exports = function(config) {
  config = Object.assign({}, defaultConfig, config)

  var mockGlob = config.glob
  var gaze = new Gaze(mockGlob)
  var mock = {}

  function updateMock() {
    Glob
      .sync(mockGlob)
      .map(file => {
        try {
          var filePath = path.resolve(file)
          var res = require(filePath)
          delete require.cache[require.resolve(filePath)]
          return res
        } catch (error) {
          console.log(chalk.red(error))
          return null
        }
      })
      .filter(v => !!v)
      .reduce((res, file) =>
        res.concat(
          Object.keys(file).map(api => ({
            method: api.split(' ')[0],
            uri: api.split(' ')[1],
            fn: file[api]
          }))
        ),
        []
      )
      .forEach(api => {
        mock[api.uri] = mock[api.uri] || {}
        mock[api.uri][api.method] = api.fn
        mockApp.all(api.uri, (req, res, next) => {
          if (req.method === api.method) {
            mock[api.uri][api.method](req, res)
          } else {
            next()
          }
        })
      })
  }

  // 监听mock文件的变化
  gaze.on('ready', updateMock)
  gaze.on('all', updateMock)

  updateMock()

  return mockApp
}
