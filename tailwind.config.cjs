/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2F2B2B",
        indigo: "#5567C7",
        purple: "#655DBB",
        blue: "#3E54AC",
        cream: "#ECF2FF",
        pink: "#BFACE2",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      50: "50%",
      150: "150%",
      200: "200%",
      300: "300%",
    },
  },
  plugins: [],
};
