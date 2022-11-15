/**
 * Default settings for formatting Journey projects.
 * That don't use tailwind.
 */

module.exports = {
  ...require('./core.js'),
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^env$', '^([a-zA-Z0-9]+)$', '^@[a-zA-Z]+/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
