/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx}",
    "./screens/**/*.{js,jsx}",
    "./components/**/*.{js,jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansBold: ["Aqum-regular", "sans-serif"],
        sans: ["Open-sans", "sans-serif"],
        sansItalic: ["Open-sans-italic", "sans-serif"],

      },
      colors: {

        "purple": "#3F317E",
        "black": "#120B2D",
        "blue": "#B8F8FF",
        "light-purple": "#E6E0F0",

      },
    },
  },
  plugins: [],
};