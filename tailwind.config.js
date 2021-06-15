module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#12141d",
        secondary: "#13b5ea",
        btncolor: "#e6027e",
        card: "#1e2029",
        formcolor: "#767676",
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
