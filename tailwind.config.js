/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fb: '#3B5998',
        gg: ' #dd4b39',
        tw:' #55ACEE',
      },
    },
  },
  plugins: [require('daisyui')],
}