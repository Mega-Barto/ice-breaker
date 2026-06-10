/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        ice: '#e0fbfc',
        mist: '#c2dfe3',
        slate: '#9db4c0',
        storm: '#5c6b73',
        deep: '#253237',
      },
    },
  },
  plugins: [],
} 