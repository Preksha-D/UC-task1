/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        blue: {
          baby: '#D1E9F6', 
        },
        gray: {
          blue: '#ABC7E3',
        }
      },
    },
  },
  plugins: [],
}