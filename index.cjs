module.exports = {
  ...require("./core.cjs"),
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^env$", "^([a-zA-Z0-9]+)$", "^@[a-zA-Z]+/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
