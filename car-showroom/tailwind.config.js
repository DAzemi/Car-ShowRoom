/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      anton: ['Anton', 'sans-serif'],
    },
  },
  plugins: [],
}
