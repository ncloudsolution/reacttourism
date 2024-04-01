/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#0e6313",
        Secondary: "#14d01f",
        errorpink: "#be185d",
        navgray: "#93939311",
      }

    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
