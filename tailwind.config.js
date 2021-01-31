module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      offer: "50rem"
    },
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
      primary: "#09b1ba",
      secondary: "#999",
      red: "#ef4444",
      white: "#ffffff",
      gray: "#ebedee",
      lightGray: "#f5f6f7",
      default: "#666666",
      dark: "#111111",
      transparent: "transparent"
    },
    fontFamily: {
      body: ['"Maison Neue"', "Helvetica Neue", "Helvetica-Neue", "Arial"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
