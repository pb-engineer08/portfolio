module.exports = {
  plugins: [
    require('postcss-nesting'), // must come BEFORE tailwindcss
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}