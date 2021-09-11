const path = require('path')
const withSass = require('@zeit/next-sass')
const tailwindCss = require('tailwindcss')

module.exports = {
  trailingSlash: true,
  // webpack
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
