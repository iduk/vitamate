// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
    colors: {
      primary: '#5cbbbb',
      black: colors.black,
      white: colors.white,
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
