/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'testes-orange': '#f26262',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
