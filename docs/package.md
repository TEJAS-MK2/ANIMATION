# Package usage

ANIMATION v1.1.0 is distributed as `@tejas-mk2/animation` through GitHub Packages.

## Install

For a project that uses the GitHub Packages registry for the `@tejas-mk2` scope:

```ini
@tejas-mk2:registry=https://npm.pkg.github.com
```

Then install:

```bash
npm install @tejas-mk2/animation
```

Or use the registry flag for a one-off install:

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

## Authentication

GitHub Packages may require authentication depending on your account and package visibility. Create a GitHub personal access token with the minimum package-read permission required by your account, then authenticate npm without committing the token to the repository.

A common user-level configuration is:

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Set `NODE_AUTH_TOKEN` in your shell or CI secret store. Never put a real token in `.npmrc`, source files, screenshots, issues, or pull requests.

## Verify installation

```bash
npm view @tejas-mk2/animation version --registry=https://npm.pkg.github.com
npm ls @tejas-mk2/animation
```

The current stable release is `1.1.0`.

## Package contents

The package is intentionally scoped to reusable project material. Website-only CI configuration and repository metadata are not part of the published file allowlist.

## Node.js

The package targets Node.js 18 or newer.

## Troubleshooting

### 401 or 403

Check that your token is valid, has package-read access, and is being supplied through `NODE_AUTH_TOKEN` rather than committed configuration.

### 404

Confirm the scope registry is configured for `@tejas-mk2` and that you are requesting the exact package name.

### Wrong version

Run:

```bash
npm view @tejas-mk2/animation versions --json --registry=https://npm.pkg.github.com
```

Then install the intended version explicitly, for example:

```bash
npm install @tejas-mk2/animation@1.1.0
```
