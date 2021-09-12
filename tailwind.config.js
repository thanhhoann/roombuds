module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      background: "#fef6e4",
      main: "#f3d2c1",
      btn: "#f582ae",
      btn_text: "#001858",
      headline: "#001858",
      para: "#172c66",
      divider: "#DFD5D5",

      background_dark: "#0f0e17",
      main_dark: "#fffffe",
      btn_dark: "#ff8906",
      btn_text_dark: "#fffffe",
      headline_dark: "#fffffe",
      para_dark: "#a7a9be",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      pacifico: ['"Pacifico"', "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
