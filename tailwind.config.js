// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        large: '20px',
      },
    },
    container: {
      center: true,
    },
    colors: {
      // Build your palette here
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      warning: colors.yellow,
      danger: colors.red,
      success: colors.green,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#5cbbbb',
      primary: {
        100: '#EEF8F8',
        200: '#DEF1F1',
        300: '#BDE3E3',
        400: '#9DD6D6',
        500: '#7CC8C8',
        600: '#5cbbbb',
        700: '#52A8A8',
        800: '#377070',
        900: '#244A4A',
      },
    },
    fontFamily: {
      sans: ['Nanumsquare', 'sans-serif'],
      serif: ['serif'],
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus'],
    borderColor: ['focus', 'hover'],
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
