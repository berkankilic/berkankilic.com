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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        primary: {
          bg: "#080808",
          text: "#fff",
          color: "#5eb0fd",
        },
        secondary: {
          bg: "#111",
          text: "#999",
        },
        tertiary: {
          bg: "#222",
          text: "#666",
        },
      },
    },
  },
  plugins: [],
};
