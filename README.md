# ANIMATION

A free, open-source collection of web animations, UI components, and complete starter templates.

**Discover → Preview → Copy → Customize → Ship.**

## Live website

**[Open ANIMATION](https://tejas-mk2.github.io/ANIMATION/)**

## Documentation

**[Open the documentation site](https://tejas-mk2.github.io/ANIMATION/docs/)**

The library and documentation are connected: use the library to discover and preview components, then use the docs for implementation guidance and framework references. The component reference is available at [`docs/components/`](docs/components/).

## GitHub Packages

ANIMATION is distributed as the scoped package **`@tejas-mk2/animation`** through GitHub Packages.

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

For a project-level `.npmrc`:

```ini
@tejas-mk2:registry=https://npm.pkg.github.com
```

The package targets Node.js **18+**. GitHub Packages releases use semantic version tags (`vMAJOR.MINOR.PATCH`), and the tag must match the version in `package.json`.

> **Current release:** `v1.0.1`

## Release process

Releases are validated and published through GitHub Actions:

1. Update `package.json` to the intended semantic version.
2. Run `npm test` and `npm run pack:check`.
3. Commit the version change.
4. Create a matching tag such as `v1.1.0`.
5. GitHub Actions validates the tag and package, publishes the new version to GitHub Packages, and creates the GitHub Release when the release does not already exist.

The release workflow is [`release.yml`](.github/workflows/release.yml). Package publishing is [`publish-package.yml`](.github/workflows/publish-package.yml).

## Templates

ANIMATION includes six complete, ready-to-customize static website starters:

- Creative Portfolio
- Modern SaaS
- Developer Docs
- Creative Agency
- Dashboard
- Startup Landing

Browse them from [`templates/`](templates/).

## Component registry

The full collection is available through the searchable [`registry/`](registry/) page.

## Component library

The library now includes **28 reusable effects and UI patterns**:

- Magnetic Button
- Tilt Card
- Text Reveal
- Spotlight Card
- Aurora Background
- Scramble Text
- Glow Button
- Animated Underline
- Depth Card
- Flip Card
- Typewriter
- Gradient Text
- Letter Wave
- Grid Pulse
- Particle Field
- Mesh Gradient
- Ripple Button
- Border Beam
- Elastic Card
- Count Up
- Modal
- Toast
- Dropdown
- Tooltip
- Tabs
- Accordion
- Loading
- Scroll Reveal
- Cursor Highlight

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
- Automated release workflow
- Static quality checks
- Automated browser smoke tests
- Zero-build static frontend

## Local development

```bash
git clone https://github.com/TEJAS-MK2/ANIMATION.git
cd ANIMATION
npm test
npm run pack:check
python3 -m http.server 4173
```

The browser test suite uses Playwright in GitHub Actions and checks core pages, the documentation, the registry, templates, downloads, mobile rendering, and every component source page.

## Accessibility

Motion is treated as enhancement, not a requirement. The project respects `prefers-reduced-motion`, keeps interactive controls keyboard-friendly, and provides static fallbacks. See [`docs/accessibility.md`](docs/accessibility.md).

## Quality checks

GitHub Actions checks release-critical project health, including:

- JavaScript syntax
- Repository structure and required files
- Local `href` and `src` references
- Package metadata
- Package contents
- Release/tag version consistency
- Browser smoke tests

A release is only considered ready when its validation steps pass.

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
- [x] Component reference index
- [x] GitHub Pages website
- [x] GitHub Packages publishing workflow
- [x] Automated quality checks
- [x] Automated browser smoke tests
- [x] Accessibility guidance
- [x] 28-component library
- [x] Automated GitHub Release workflow
- [x] `v1.0.1` release

### Next

- [ ] Add framework-specific recipes for the new UI primitives
- [ ] Add visual regression testing
- [ ] Expand advanced component APIs
- [ ] Prepare the `v1.1.0` release

## License

MIT. See [`LICENSE`](LICENSE).
