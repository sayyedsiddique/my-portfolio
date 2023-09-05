/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        }
      }
    },
    fontFamily: {
      'kaushan': ["Kaushan Script"],
    }
  },
  plugins: [],
}