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
        dark: "#0e0b08",
        light: "#fefbfc",
        extra: "#f4c208",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(13rem, 1fr))",
      },
      boxShadow: {
        "small-shadow":
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        "static-shadow":
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        "hover-shadow":
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      },
      backgroundImage: {
        main_bg:
          "linear-gradient(to bottom, #00080f, #000d17, #01111e, #011426, #00172d)",
      },
    },
  },
  plugins: [],
};
