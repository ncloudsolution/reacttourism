/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxxs: "330px",
        xxs: "380px",
        xs: "480px",
        bxs: "540px",

        bigmd: "860px",

        mobile: "1150px",
        midxl: "1400px",

        //   'sm': '640px',
        //   'md': '768px',
        //   'lg': '1024px',
        //   'xl': '1280px',
        //   '2xl': '1536px',**/
      },
      colors: {
        primary: "#0e6313",
        Secondary: "#14d01f",
        errorpink: "#be185d",
        navgray: "#93939311",
      },

      keyframes: {
        carmoving: {
          "0%": {
            transform: "translateX(-250px)",
          },
          "100%": {
            transform: "translateX(250px)",
          },
        },

        carmoving2: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.4)",
          },
        },

        cartext: {
          "0%": {
            transform: "translateY(0px)",
            fontSize: "140px",
            opacity: 0.05,
          },
          "100%": {
            fontSize: "40px",
            opacity: 1,
            transform: "translateY(-150px)",
          },
        },
        cartext2: {
          "0%": {
            transform: "translateY(-180px) scascale(1)",
            opacity: 0.7,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-205px) scale(1.4)",
          },
        },
      },

      animation: {
        carmoving: "carmoving 2s ease-out infinite alternate",
        carmoving2: "carmoving2 2s ease-out infinite alternate",
        cartext: "cartext 2s ease-out alternate",
        cartext2: "cartext2 2s ease-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
