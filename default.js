/**
 * Default settings for formatting Journey projects.
 */

module.exports = {
  ...require('./core.js'),
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
  importOrder: ['^env$', '^([a-zA-Z0-9]+)$', '^@[a-zA-Z]+/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
