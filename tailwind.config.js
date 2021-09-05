// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    screens: {
      lg: { min: '1024px', max: '1279px' },
    },
    container: {
      center: true,
    },
    colors: {
      primary: '#5cbbbb',
      danger: colors.rose,
      warning: colors.amber,
      success: colors.green,
      gray: colors.gray,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      sans: ['Nanumsquare', 'sans-serif'],
      serif: ['serif'],
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
}
