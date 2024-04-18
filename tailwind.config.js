/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "serif": ["var(--font-fraunces)", ...defaultTheme.fontFamily.serif] 
      }, 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // hhText: "#000000", 
      // hhBackground: "#FEFFFF", 
      // hhPrimary: "#007A36", 
      // hhSecondary: "#D32011", 
      // hhAccent: "#E9B872" 

      // hhBlack: "#000000", 
      // hhFireEngineRed: "#D32011", 
      // hhDarkSpringGreen: "#007A36", 
      // hhWhite: "#FEFFFF", 
      // hhEarthYellow: "#E9B872" 
    }, 
  }, 
  daisyui: {
    themes: [
      "cupcake", 
      {
        lighttheme: {
          "primary": "#007A36", 
          "secondary": "#D32011", 
          "accent": "#E9B872", 
          "neutral": "#291334", 
          "base-100": "#F5F4F6", 
          "info": "#0870D9", 
          "success": "#8FD5A6", 
          "warning": "#EAB308", 
          "error": "#F22C6B" // or #FE64A3 
        }, 
        darktheme: {
          "text": "#FFFFFF", 
          "background": "#000000", 
          "primary": "#85FFBC", 
          "secondary": "#EE3B2B", 
          "accent": "#8D5C16" 
        }
      }
    ]
  },
  plugins: [require("daisyui")],
};
