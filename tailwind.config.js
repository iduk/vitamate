// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    screens: {
      lg: { min: '1024px', max: '1279px' },
    },
    container: {
      center: true,
    },
    colors: {
      primary: {
        light: '#7CC8C8',
        DEFAULT: '#5cbbbb',
        dark: '#499595',
      },
      success: colors.green,
      danger: colors.rose,
      warning: colors.amber,
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
