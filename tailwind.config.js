module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        inherit: "inherit",
        none: "none",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
