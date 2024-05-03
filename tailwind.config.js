/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      boxShadow: {
        shimmershadow: "0 0 30px 30px rgba(255, 255, 255, 0.05)",
        popshadow:
          "-2px 8px 10px 4px rgba(0, 0, 0, 0.05), 2px -8px 10px 4px rgba(0, 0, 0, 0.05)",
      },

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
        primary: "#eab308",
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
            opacity: 0.1,
            fontSize: "25px",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-215px) scale(1.4)",
            fontSize: "35px",
          },
        },

        cartext2formid: {
          "0%": {
            transform: "translateY(-150px) scascale(1)",
            opacity: 0.1,
            fontSize: "15px",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-145px) scale(1.3)",
            fontSize: "25px",
          },
        },

        cartext2forsmall: {
          "0%": {
            transform: "translateY(-80px) scascale(1)",
            opacity: 0.1,
            fontSize: "12px",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-105px) scale(1.3)",
            fontSize: "20px",
          },
        },

        shimmer: {
          "0%": {
            transform: "translateX(-150%)",
          },
          "50%": {
            transform: "translateX(-60%)",
          },
          "100%": {
            transform: "translateX(150%)",
          },
        },
      },

      animation: {
        carmoving: "carmoving 2s ease-out infinite alternate",
        carmoving2: "carmoving2 2s ease-out infinite alternate",
        cartext: "cartext 2s ease-out alternate",
        cartext2: "cartext2 2s ease-out infinite alternate",
        cartext2formid: "cartext2formid 2s ease-out infinite alternate",
        cartext2forsmall: "cartext2forsmall 2s ease-out infinite alternate",
        shimmer: "shimmer 2.5s infinite ",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
