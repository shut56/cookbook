module.exports = {
  purge: [
    './client/**/*.html',
    './client/**/*.js',
    './client/**/*.jsx'
  ],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      borderWidth: ['first', 'last'],
    }
  },
  plugins: []
}
