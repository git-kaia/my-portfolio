// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryBlue: '#265aa5', // Blue for headings etc.
        salmon: '#ffc5bb', // Pink for decoration
        text: '#494949',
        gray: '#7f8287', // Gray for text or other
        bg: '#f4f4f4'
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
