# ANIMATION

A free, open-source collection of web animations, UI components, and complete starter templates.

**Discover → Preview → Copy → Customize → Ship.**

## Live website

**[Open ANIMATION](https://tejas-mk2.github.io/ANIMATION/)**

## Documentation

**[Open the documentation site](https://tejas-mk2.github.io/ANIMATION/docs/)**

The library and documentation are connected: use the library to discover and preview components, then use the docs for implementation guidance and framework references.

## GitHub Packages

ANIMATION is distributed as **`@tejas-mk2/animation`** through GitHub Packages.

### Current stable release

**`@tejas-mk2/animation@1.2.0`**

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

For a project-level `.npmrc`:

```ini
@tejas-mk2:registry=https://npm.pkg.github.com
```

See [`docs/package.md`](docs/package.md) for authentication, CI usage, verification, and troubleshooting.

The stable package targets Node.js **18+**. The currently released package contains the v1.2.0 API; new unreleased website components are developed independently until the next package release.

## New development direction

The next development cycle expands ANIMATION beyond isolated components into reusable **website blocks** and advanced interaction patterns.

### Blocks

The new Blocks collection deliberately **excludes login/authentication and pricing sections**.

Included blocks:

- Hero
- Feature grid
- Testimonials
- FAQ
- CTA
- Contact
- Footer
- Dashboard

Browse them at [`blocks/`](blocks/) or open [`blocks/index.html`](blocks/index.html).

### Advanced components

The development gallery now includes new concepts for:

- Animated Dock
- GitHub Activity
- GitHub Contribution Graph
- Resizable Sidebar
- Media Timeline
- Motion Navbar
- Noise Field
- Star Field
- Particle Network
- Liquid Gradient
- Dot Matrix
- Wave Grid

These are **unreleased development components** and are not represented as part of the stable `1.2.0` package yet.

## Package API

The stable package has a small JavaScript/TypeScript entrypoint:

```js
import { version, components, getComponentPath } from '@tejas-mk2/animation';

console.log(version);
console.log(getComponentPath('modal'));
```

TypeScript declarations are included at `package/index.d.ts`.

## Templates

ANIMATION includes complete, ready-to-customize static website starters. Browse them from [`templates/`](templates/).

## Component registry

The full collection is available through the searchable [`registry/`](registry/) page.

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
- Semantic accessible UI patterns
- Complete website templates
- Copy-paste website blocks
- Animated dock navigation
- GitHub activity and contribution graph patterns
- Resizable sidebar
- Interactive media timeline
- Motion navigation patterns
- Shader-inspired animated backgrounds
- GitHub Pages deployment
- GitHub Packages distribution
- Automated release workflow
- Static quality checks
- Automated browser smoke tests
- Accessibility regression checks
- Visual regression guard
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

## Accessibility

Motion is treated as enhancement, not a requirement. The project respects `prefers-reduced-motion`, keeps interactive controls keyboard-friendly, and provides static fallbacks. See [`docs/accessibility.md`](docs/accessibility.md).

## Quality checks

GitHub Actions checks release-critical project health, including JavaScript syntax, repository structure, local references, HTML metadata, package metadata, package contents, release/tag consistency, browser smoke tests, accessibility checks, and representative visual regression guards.

A release is only considered ready when its validation steps pass.

## Contributing

Contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting components or templates.

## Security

Please report security vulnerabilities responsibly instead of opening a public issue. See [`SECURITY.md`](SECURITY.md).

## Roadmap

- [x] Component gallery
- [x] Search and filters
- [x] Component viewer
- [x] Code-copy workflow
- [x] Responsive navigation
- [x] Reduced-motion support
- [x] Framework reference registry
- [x] Component customization controls
- [x] Downloadable component source center
- [x] Website templates
- [x] Searchable component registry
- [x] Documentation site
- [x] GitHub Pages website
- [x] GitHub Packages publishing workflow
- [x] Automated quality checks
- [x] Automated browser smoke tests
- [x] Accessibility guidance
- [x] 37-component v1.2.0 library
- [x] Automated GitHub Release workflow
- [x] `@tejas-mk2/animation@1.2.0` published to GitHub Packages
- [x] Framework integration recipes
- [x] Visual regression guard
- [x] Stable package entrypoint
- [x] TypeScript package declarations
- [x] Blocks foundation
- [x] Advanced interaction component foundation

### Next

- [ ] Integrate the new Blocks browser into the main site navigation
- [ ] Add dedicated previews and documentation for the new advanced components
- [ ] Connect GitHub activity/graph components to configurable data sources
- [ ] Add full pixel-baseline visual snapshots
- [ ] Expand advanced component APIs
- [ ] Decide which new components belong in the next package release

## License

MIT. See [`LICENSE`](LICENSE).
