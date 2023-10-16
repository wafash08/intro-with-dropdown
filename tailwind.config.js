/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#fafafa",
        "medium-gray": "#696969",
        "almost-black": "#141414",
      },
      transitionProperty: {
        expanded: "transform, visibility, opacity",
      },
      boxShadow: {
        "3xl": "0px 0px 40px rgb(0 0 0 / 0.15)",
      },
    },
  },
  plugins: [],
};
