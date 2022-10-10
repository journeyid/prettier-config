module.exports = {
  ...require("./core.cjs"),
  importOrder: ["^env$", "^([a-zA-Z0-9]+)$", "^@[a-zA-Z]+/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};