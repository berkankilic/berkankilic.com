/** @type {import('tailwindcss').Config} */

const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        primary: {
          bg: "#080808",
          text: "#efeff1",
          color: "#5eb0fd",
        },
        secondary: {
          bg: "#111",
          text: "#adadb8",
        },
        tertiary: {
          bg: "#222",
          text: "#999ca3",
        },
      },
    },
  },
  plugins: [],
};
