/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Newsreader", "serif"],
        secondary: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

