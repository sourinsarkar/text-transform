/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 2px 2px rgba(0, 85, 255, 0.25)'
      },
    },
  },
  plugins: [],
}