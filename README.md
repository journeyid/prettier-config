# @journeyid/prettier-config

## Usage

Install the package:

```bash
yarn add --dev @journeyid/prettier-config
```

Edit `package.json`:

```json
{
  "prettier": "@journeyid/prettier-config"
}
```

Or, for extensibility, create a `prettier.config.cjs` file:

```bash
echo 'module.exports = {...require("@journeyid/prettier-config")}' > prettier.config.cjs
```

### Variation: Just the core config

By default, the package `@trivago/prettier-plugin-sort-imports` will be installed and used for sorting modules. If you don't want this (for example, because you're project uses commonJS style `require` statements) you can use `core.js` instead.

`package.json`:

```json
{
  "prettier": "@journeyid/prettier-config/core.js"
}
```

Or, `prettier.config.cjs`:

```js
module.exports = {
  ...require('@journeyid/prettier-config/core'),
}
```

### Variation: Tailwind CSS

If you're using Tailwind CSS:

```bash
yarn add -D prettier-plugin-tailwindcss
```

In `prettier.config.cjs`:

```js
module.exports = {
  ...require('./core.js'),
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: ['^env$', '^([a-zA-Z0-9]+)$', '^@[a-zA-Z]+/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
```

---

### Publishing/updating this package

Make sure you have up-to-date `~/.npmrc`:

```txt
@journeyid:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={GITHUB_TOKEN}
```

[Authenticate to Gihub Packages with personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token):

```bash
npm login --scope=@journeyid --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

[Publish the package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-a-local-npmrc-file):

```bash
npm publish
```
