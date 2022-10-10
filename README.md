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

```js
module.exports = {
  ...require('@journeyid/prettier-config/index.cjs'),
}
```


## About

The plugin `"@trivago/prettier-plugin-sort-imports` allows for sorting of imports. These settings impact how imports are sorted.

```json
{
  ...
  "importOrder": ["^env$", "^([a-zA-Z0-9]+)$", "^@[a-zA-Z]+/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  ...
}
```

## Publishing package

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
