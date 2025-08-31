/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss,css,ejs}"],
  theme: {
    screens: {
      'sm': [{'max': '749px'}]
    },
    extend: {
      colors: {
        green: '#008a7c',
        orange: '#f4ba2e',
        beige: '#f8f4dd'
      },
    },
  },
  plugins: [],
}

