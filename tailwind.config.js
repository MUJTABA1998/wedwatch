/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Segoe UI"],
        "secondary-font": ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#11ADBA",
        "pr-s": "#0d828b",
        work: "#F5F7FA",
        secondary: "#0F2A43",
        footer: "#E9F6F6",
      },
      backgroundImage: {
        header: "url('./asset/IMAGE.png')",
        overlay: "url('./asset/Image2.png')",
        "header-curve": "url('./asset/curve2.png')",
        "header-curve2": "url('./asset/curve1.png')",
        "header-curve3": "url('./asset/curve3.png')",
        rectangle: "url('./asset/Rectangle.png')",
        "work-bg": "url(./asset/work.png)",
        "photo-bg": "url(./asset/photographer.png)",
      },
    },
  },
  plugins: [],
};
