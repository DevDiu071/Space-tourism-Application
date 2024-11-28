/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "backdrop-color": "#0B0D17",
      white: "rgb(235, 235, 235)",
      gray: "rgb(207, 207, 207)",
    },
    extend: {},
  },
  plugins: [],
};
