module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  semi: false,
  singleQuote: true,
  importOrder: ['^env$', '^([a-zA-Z0-9]+)$', '^@[a-zA-Z]+/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}