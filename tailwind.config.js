module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1280px"
      },
      padding: {
        sm: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
        DEFAULT: "1rem"
      }
    },
    colors: {
      primary: "#09B1BA",
      secondary: "#999",
      white: "#ffffff"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
