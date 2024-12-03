/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdBig: "900px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xmd: "1100px",
    },
    colors: {
      "backdrop-color": "#0B0D17",
      white: "rgb(235, 235, 235)",
      gray: "rgb(207, 207, 207)",
      black: "#000",
      "dark-gray": "#999",
    },
    extend: {},
  },
  plugins: [],
};
