/**
 * Default settings for formatting Journey projects.
 *
 * Extends core settings and makes use of the
 * '@trivago/prettier-plugin-sort-imports' plugin to sort imports.
 */

module.exports = {
  ...require('./core.js'),
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^env$', '^([a-zA-Z0-9]+)$', '^@[a-zA-Z]+/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
