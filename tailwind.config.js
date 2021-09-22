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
      sm: '640px',
      // => @media (min-width: 639px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
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
    },
    fontFamily: {
      sans: ['Nanumsquare', 'sans-serif'],
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
