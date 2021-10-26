const path = require('path')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // webpack
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    domains: ['images.pexels.com', 'image.shutterstock.com'],
  },
}
