// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      primary: '#5cbbbb',
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Nanumsquare', 'sans-serif'],
      serif: ['serif'],
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
