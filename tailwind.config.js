/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-fuchsia-500',
    'bg-teal-500',
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-cyan-500',
    'text-fuchsia-500',
    'text-teal-500',
    'border-b-red-500',
    'border-b-blue-500',
    'border-b-green-500',
    'border-b-yellow-200',
    'border-b-cyan-500',
    'border-b-fuchsia-500',
    'border-b-teal-500',
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

