/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 5px 10px rgba(0, 85, 255, 0.25)'
      },
    },
  },
  plugins: [],
}