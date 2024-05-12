/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#071952",
        secondary: "#F5F5F5",
        third: "#576CBC",
        fourth: "#0079FF",
        five: "#537FE7",
      },
      fontFamily: {
        lato : "Lato, sans-serif" ,
        sanchez : "Sanchez, serif" ,
        Lumanosimo : "Lumanosimo , cursive"
      }
    },
  },
  plugins:[],
};
