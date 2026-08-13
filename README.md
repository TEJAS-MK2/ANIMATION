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

### Current stable release

**`@tejas-mk2/animation@1.1.0`**

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

For a project-level `.npmrc`:

```ini
@tejas-mk2:registry=https://npm.pkg.github.com
```

See [`docs/package.md`](docs/package.md) for authentication, CI usage, verification, and troubleshooting.

The package targets Node.js **18+**. GitHub Packages releases use semantic version tags (`vMAJOR.MINOR.PATCH`), and the tag must match the version in `package.json`.

## Package API

The package now has a small stable JavaScript/TypeScript entrypoint for tooling and integrations:

```js
import { version, components, getComponentPath } from '@tejas-mk2/animation';

console.log(version);
console.log(getComponentPath('modal'));
```

TypeScript declarations are included at `package/index.d.ts`. The reusable component sources remain under `components/`, while the gallery, documentation, registry, and templates remain website concerns.

See [`package/README.md`](package/README.md) for the complete component-name map.

## Release process

Releases are validated and published through GitHub Actions:

1. Update `package.json` to the intended semantic version.
2. Run `npm test` and `npm run pack:check`.
3. Run `npm run test:browser` and `npm run test:visual`.
4. Commit the version change.
5. Create a matching tag such as `v1.2.0`.
6. GitHub Actions validates the tag and package, publishes the new version to GitHub Packages, and creates or updates the corresponding GitHub Release.

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

The library includes **33 reusable effects and UI patterns**.

## Framework recipes

Integration guidance is available for:

- Vanilla JavaScript
- React
- TypeScript
- Tailwind CSS
- Next.js

See [`docs/recipes.md`](docs/recipes.md).

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
- Accessibility regression checks
- Representative visual regression guard
- Stable package API and TypeScript declarations
- Zero-build static frontend

## Local development

```bash
git clone https://github.com/TEJAS-MK2/ANIMATION.git
cd ANIMATION
npm install
npm test
npm run pack:check
npm run test:browser
npm run test:visual
```

The browser suite uses Playwright in GitHub Actions and checks core pages, documentation, the registry, templates, downloads, mobile rendering, accessibility of interactive controls, reduced-motion behavior, and every component source page. The visual guard checks representative pages for empty renders, missing titles, unexpected horizontal overflow, and other structural visual regressions.

## Accessibility

Motion is treated as enhancement, not a requirement. The project respects `prefers-reduced-motion`, keeps interactive controls keyboard-friendly, uses semantic states for controls such as progress and segmented selection, and provides static fallbacks. See [`docs/accessibility.md`](docs/accessibility.md).

## Quality checks

GitHub Actions checks release-critical project health, including:

- JavaScript syntax
- Repository structure and required files
- Local `href` and `src` references
- Package metadata
- Package contents
- Release/tag version consistency
- Browser smoke tests
- Accessibility regression checks
- Representative visual regression guards
- Package entrypoint syntax

A release is only considered ready when its validation steps pass.

## Contributing

Contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting components or templates. Pull requests include a checklist for testing, accessibility, package impact, and security hygiene.

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
- [x] 33-component library
- [x] Automated GitHub Release workflow
- [x] `v1.0.1` release
- [x] `v1.1.0` release
- [x] `@tejas-mk2/animation@1.1.0` published to GitHub Packages
- [x] Framework integration recipes
- [x] Visual regression guard
- [x] Package installation and authentication guide
- [x] Stable package entrypoint
- [x] TypeScript package declarations
- [x] Contribution and issue templates

### Next

- [ ] Expand advanced component APIs
- [ ] Add full pixel-baseline visual snapshots
- [ ] Expand the component library
- [ ] Improve TypeScript-specific examples

## License

MIT. See [`LICENSE`](LICENSE).
