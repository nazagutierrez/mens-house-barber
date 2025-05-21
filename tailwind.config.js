/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        darkerWhite: "#ebebeb",
      },
      backgroundColor: {
        grayCustom: "#B6B6B6",
      },
    },
  },
  plugins: [],
};
