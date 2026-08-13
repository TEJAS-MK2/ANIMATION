# ANIMATION

A free, open-source collection of web animations, UI components, and complete starter templates.

**Discover → Preview → Copy → Customize → Ship.**

## Live website

**[Open ANIMATION on GitHub Pages](https://tejas-mk2.github.io/ANIMATION/)**

## GitHub Packages

ANIMATION is configured as a scoped npm package for **GitHub Packages**.

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

The package is published to the GitHub npm registry at `https://npm.pkg.github.com`. Releases are automated through GitHub Actions when a `v*.*.*` tag is pushed. The workflow validates the package and JavaScript before publishing with the repository's `GITHUB_TOKEN`.

## Documentation

**[Open the documentation site](https://tejas-mk2.github.io/ANIMATION/docs/)**

## Templates

ANIMATION includes six complete, ready-to-customize static website starters: Creative Portfolio, Modern SaaS, Developer Docs, Creative Agency, Dashboard, and Startup Landing.

## Component registry

The full collection is available through the searchable [`registry/`](registry/) page.

## Component library

The library currently includes 20 reusable effects and UI patterns, including Magnetic Button, Tilt Card, Text Reveal, Spotlight Card, Aurora Background, Scramble Text, Glow Button, Animated Underline, Depth Card, Flip Card, Typewriter, Gradient Text, Letter Wave, Grid Pulse, Particle Field, Mesh Gradient, Ripple Button, Border Beam, Elastic Card, and Count Up.

## Features

- Interactive component gallery
- Searchable component registry
- Responsive previews
- Component-specific customization controls
- HTML, CSS, JavaScript, React, and Tailwind references
- One-click code copying
- Browser-local source downloads
- Responsive mobile navigation
- Reduced-motion support
- Keyboard-friendly interactions
- Six complete website templates
- Community submission workflows
- GitHub Pages deployment
- GitHub Packages distribution
- Zero-build static frontend

## Local development

```bash
git clone https://github.com/TEJAS-MK2/ANIMATION.git
cd ANIMATION
npm test
npm run pack:check
```

## Package publishing

Publishing is automated by [`.github/workflows/publish-package.yml`](.github/workflows/publish-package.yml). Push a semantic version tag such as `v1.0.0` after reviewing the package. The workflow uses GitHub's `GITHUB_TOKEN` with `packages: write` permission, validates the package, runs the JavaScript checks, previews the package contents, and then publishes to GitHub Packages.

GitHub's npm registry requires scoped package names; this project uses `@tejas-mk2/animation`. citeturn0search2turn0search7

## Contributing

Contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting components or templates.

## Security

Please report security vulnerabilities responsibly instead of opening a public issue. See [`SECURITY.md`](SECURITY.md).

## Code of Conduct

Participation in this project is governed by [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Roadmap

- [x] Component gallery
- [x] Search and filters
- [x] Component viewer
- [x] Code-copy workflow
- [x] Responsive navigation
- [x] Reduced-motion support
- [x] Framework reference registry
- [x] Component-specific customization controls
- [x] Downloadable component source center
- [x] Six website templates
- [x] Searchable component registry
- [x] Community submission workflow
- [x] Documentation site
- [x] GitHub Pages website
- [x] GitHub Packages publishing workflow
- [ ] First published GitHub Package release

## License

MIT. See [`LICENSE`](LICENSE).
