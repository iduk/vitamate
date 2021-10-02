// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens: {
      sm: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
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
      transparent: colors.transparent,

      primary: '#5cbbbb',
      primary: {
        50: '#F1F9F9',
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
      secondary: '#DCC7AE',
      secondary: {
        50: '#F9F5F1',
        100: '#EEF8F8',
        200: '#F3ECE4',
        300: '#EDE3D6',
        400: '#E7DAC9',
        500: '#E2D0BB',
        600: '#DCC7AE',
        700: '#D0B593',
        800: '#CAAC85',
        900: '#c5a378',
      },
    },
    fontFamily: {
      sans: ['-apple-system', 'NanumSquare', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
      serif: ['serif'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      lower: 'lower-alpha',
      upper: 'upper-alpha',
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus'],
    borderColor: ['focus', 'hover'],
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
