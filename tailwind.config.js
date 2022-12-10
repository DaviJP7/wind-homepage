const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.html'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gap: {
        'default': '4em'
      }
    },
    colors: {
      "primary": "#01876e",
      "secondary": "#fe374f",
      "white": "#fff",
      "slate": colors.slate,
      "sky": colors.sky,
      "blue": colors.blue
    }
  },
  plugins: [],
}
