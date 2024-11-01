/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'screens': {
        '1260': "1260px",
        '990': "990px",
        '770': "770px",
        '480': "480px",
      },
    },
  },
  plugins: [],
}