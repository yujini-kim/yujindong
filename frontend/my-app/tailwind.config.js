/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './styles/**/*.{css}'],
  theme: {
    extend: {
      colors: {
           primary: {
          10: '#F9F7F3',
          20: '#EFE9DF',
          30: '#242020',
          40: '#C4BCB0',
          50: '#D9A844',
        },
        lightgray: {
          10: '#F4F4F5',
          20: '#E5E5E5',
          30: '#C7C7C7',
          40: '#C4BCB0',
          50: '#D9A844',
        },
        accent: {
          yellow: '#FAC656',
          black: '#242020',
          green: '#7BB274',
          red: '#D95C5C',
          blue: '#6A9DD3',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

