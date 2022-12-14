# @journeyid/prettier-config

## Setup

### [Optional] Remove existing config files & dependencies

You can remove your `.prettierrc` file and prettier packages that will be replaced by the Journey package.

```sh
# remove packages
yarn remove --dev prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
```

### Install the package

```sh
# install package
yarn add --dev @journeyid/prettier-config

# update package.json
npm pkg set prettier='@journeyid/prettier-config'

# [optional]
npx sort-package-json
```

### Add format script

It may be appropriate to add a format script.

A more restricted one, that only formats ts and js fils in the src folder, could look like this:

```json
{
  "scripts": {
    "format": "prettier --write './src/**/*.{ts,js}'"
  }
}
```

You could add it with this command:

```sh
# add command to package.json
npm pkg set scripts.format="prettier --write './src/**/*.{ts,js}'"
```

Then test it:

```sh
# test it
yarn format
```

#### Format Variations

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

```sh
echo "module.exports = { ...require('@journeyid/prettier-config') }" > prettier.config.cjs
```

## Customization

### Just the core config

By default, the plugin `@trivago/prettier-plugin-sort-imports` and the tailwind plugin will be installed. If you don't want these (for example, because you're project uses commonJS style `require` statements) you can use `core.js` instead.

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

---

## Dev

### Publishing/updating this package

Make sure you have up-to-date `~/.npmrc`:

```txt
@journeyid:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={GITHUB_TOKEN}
```

[Authenticate to Gihub Packages with personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token):

```sh
npm login --scope=@journeyid --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

[Publish the package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-a-local-npmrc-file):

```sh
npm publish
```
