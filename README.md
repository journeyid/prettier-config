# @journeyid/prettier-config

## Usage

```bash
# install package
yarn add --dev @journeyid/prettier-config

# update package.json
npm pkg set prettier='@journeyid/prettier-config'

# [optional]
npx sort-package-json
```

### Lint scripts

It may be appropriate to add a lint script.

A more restricted one, that only formats ts and js fils in the src folder, could look like this:

```json
{
  "scripts": {
    "lint": "prettier --write './src/**/*.{ts,js}'"
  }
}
```

```sh
# add command to package.json
npm pkg set scripts.lint="prettier --write './src/**/*.{ts,js}'"

# test it
yarn lint
```

To format everything prettier knows how to format, do this one:

```sh
npm pkg set scripts.lint="prettier --write --ignore-unknown ."
```

In that case, maybe add a `.prettierignore.` Eg,

```sh
echo 'dist/\ncoverage/' > .prettierignore
```

### Extensible config

Instead of modifying the `prettier` key in `package.json`, you can instead create an extensible `prettier.config.cjs` file:

```bash
echo 'module.exports = {...require("@journeyid/prettier-config")}' > prettier.config.cjs
```

### Variations

#### Just the core config

By default, the package `@trivago/prettier-plugin-sort-imports` will be installed and used for sorting modules. If you don't want this (for example, because you're project uses commonJS style `require` statements) you can use `core.js` instead.

`package.json`:

```json
{
  // ...
  "prettier": "@journeyid/prettier-config/core.js"
  // ...
}
```

Or, `prettier.config.cjs`:

```js
module.exports = {
  ...require('@journeyid/prettier-config/core'),
}
```

#### Tailwind CSS

If you're using Tailwind CSS:

```bash
yarn add -D prettier-plugin-tailwindcss
```

In `prettier.config.cjs`:

```js
module.exports = {
  ...require('@journeyid/prettier-config/core'),
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

## Dev

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
