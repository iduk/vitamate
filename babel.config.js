module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        polyfills: [
          'es6.promise',
          'es6.symbol',
          'es.array.iterator',
          'es.object.assign',
          'es.promise.finally',
          'es.number.is-nan',
        ],
      },
    ],
  ],
}
