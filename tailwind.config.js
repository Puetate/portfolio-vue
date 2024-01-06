/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        personal: {
          primary: '#091518',
          secondary: '#132E35',
          ternary: '#2D4A53',
          quarter: '#69818D',
          white: '#AFB3B7',
          fifth: '#5A636A',
        },
      },
      fontFamily: {
        code: ['Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
}

