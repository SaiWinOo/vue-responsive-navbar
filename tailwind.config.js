/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    important : true,
    content: [
        "./index.html",
        "./src/**/*.{js,vue,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        colors : {
            primary: '#F4F1ED',
        }
    },
  },
  plugins: [],
}
