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
    },
  },
  plugins: [],
};
