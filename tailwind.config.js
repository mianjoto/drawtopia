/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#8077fe',
        'secondary-color': '#6b63c9',
        'tertiary-color': '#49467d',
        'black-blue': '#383651',
        'dark-grey': '#27242c',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
