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
        forminput: "#3f4149",
        start: "#171921",
        end: "#353536",
        footercard: "#292b34"
      },
      fontFamily: {
        body: ['Nunito']
      },
      minHeight: {
        panel: "528px"  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
