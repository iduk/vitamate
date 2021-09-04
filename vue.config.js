const ansiRegex = require('ansi-regex')
const path = require('path')

module.exports = {
  configureWebpack: {
    entry: ['@babel/polyfill', './src/main.js'],
  },
  transpileDependencies: [ansiRegex],
}
