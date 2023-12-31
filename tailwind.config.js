/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      text50: "#fdf2f7",
      text100: "#fce7f0",
      text200: "#fbcfe3",
      text300: "#f9a8cc",
      text400: "#f472ac",
      text500: "#ec4891",
      text600: "#db2777",
      text700: "#be1862",
      text800: "#9d1753",
      text900: "#831848",
      text950: "#500727",
      main50: "#dedede",
      main100: "#deecfb",
      main200: "#c4e0f9",
      main300: "#9cccf4",
      main400: "#6dafed",
      main500: "#4b90e6",
      main600: "#3674da",
      main700: "#2d60c8",
      main800: "#2a4fa3",
      main900: "#274481",
      main950: "#0f172a",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
