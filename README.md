# @journeyid/prettier-config

## Usage

Install the package:

```bash
yarn add --dev @journeyid/prettier-config
```

Edit `package.json`:

```json
{
  // ...
  "prettier": "@journeyid/prettier-config"
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
