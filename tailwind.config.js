// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./**/*.{js,ts,jsx,tsx}'],
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
      gray: colors.gray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      success: colors.green,
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#6CC1C1',
        DEFAULT: '#5cbbbb',
        dark: '#52A8A8',
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
