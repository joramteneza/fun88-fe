/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightBlue: "#00A6FF",
        'custom-gray': '#888888'
      },
    },
  },
  plugins: [],
};
