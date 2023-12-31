/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Manrope", "sans-serif"],
      },
      colors: {
        black: "#121417",
        white: "#ffffff",
        primary: "#3470FF",
        hover: "#0B44CD",
        buttonModal: "#F9F9F9",
        "black-rgba": "rgba(255, 255, 255, 1)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
