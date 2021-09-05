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
      success: colors.teal,
      gray: colors.blueGray,
      transparent: 'transparent',
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
