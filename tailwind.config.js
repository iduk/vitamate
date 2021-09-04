// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
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
