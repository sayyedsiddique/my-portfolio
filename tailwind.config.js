/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#000000",
          200: "#1F1F1F",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
  },
  plugins: [],
};
