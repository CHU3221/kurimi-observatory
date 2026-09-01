/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0B132B', 700: '#2A365C' },
        azure: '#007FFF',
        rinwhite: '#E2EAEB',
        ringray: '#9FA9BE',
      }
    }
  },
  plugins: [],
}