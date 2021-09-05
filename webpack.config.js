module.exports = {
  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
