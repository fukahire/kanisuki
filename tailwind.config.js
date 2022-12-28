/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans TC', sans-serif",
      },
      colors: {
        'mainred': '#e60012',
        'mainyellow' : '#ffff00',
      },
    },
  },
  plugins: [],
}
