/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_main:'#5C6682',
        text_withe:'#909CBC',
        text_orange:'#FFCC70',
        text_blue:'#0C356A'
      },
      fontFamily: {
        code: ['Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

