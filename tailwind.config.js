/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'pathao-red': '#E4313B',
        'pathao-dark': '#2D2D2D',
        'pathao-gray': '#F5F5F5',
        'pathao-light': '#FAFAFA'
      }
    },
  },
  plugins: [],
}
