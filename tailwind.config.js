// tailwind.config.js
import colors from "./src/styles/colors.js";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      textPrimary: "#494949",
      textSecondary: "#7f8287",
      bgPrimary: "#f4f4f4",
      bgSecondary: "#ffffff",
      accentPrimary: "#265aa5",
      accentSecondary: "#ffc5bb",
      border: "#cccccc",
    },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
