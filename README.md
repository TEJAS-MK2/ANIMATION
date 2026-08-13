# ANIMATION

A free, open-source collection of web animations, UI components, website blocks, and complete starter templates.

**Discover → Preview → Copy → Customize → Ship.**

## Live website

**[Open ANIMATION](https://tejas-mk2.github.io/ANIMATION/)**

## Documentation

**[Open the documentation site](https://tejas-mk2.github.io/ANIMATION/docs/)**

The library and documentation are connected: use the library to discover and preview components, then use the docs for implementation guidance and framework references.

## Current release — v1.3.0

**`@tejas-mk2/animation@1.3.0` is the current stable release and is published to GitHub Packages.**

```bash
npm install @tejas-mk2/animation --registry=https://npm.pkg.github.com
```

For a project-level `.npmrc`:

```ini
@tejas-mk2:registry=https://npm.pkg.github.com
```

See [`docs/package.md`](docs/package.md) for authentication, CI usage, verification, and troubleshooting.

The package targets Node.js **18+** and includes the stable v1.3.0 package API and TypeScript declarations.

## What's new in v1.3.0

### Blocks

Added reusable website sections, deliberately excluding login/authentication and pricing sections:

- Hero
- Feature grid
- Testimonials
- FAQ
- CTA
- Contact
- Footer
- Dashboard

### Advanced components

- Animated Dock
- GitHub Activity
- GitHub Contribution Graph
- Resizable Sidebar
- Media Timeline
- Motion Navbar

### Animated backgrounds

- Noise Field
- Star Field
- Particle Network
- Liquid Gradient
- Dot Matrix
- Wave Grid

### Website and developer experience

- Redesigned template browser with the same visual language as the main site
- Expanded component and template documentation
- Improved navigation between the library, templates, and docs
- Responsive behavior improvements
- Reduced-motion considerations
- Expanded browser and visual regression coverage
- GitHub Packages release automation

## Package API

The package provides a small JavaScript/TypeScript entrypoint:

```js
import { version, components, getComponentPath } from '@tejas-mk2/animation';

console.log(version);
console.log(getComponentPath('modal'));
```

TypeScript declarations are included at `package/index.d.ts`.

## Templates

ANIMATION includes complete, ready-to-customize static website starters. Browse them from [`templates/`](templates/).

## Blocks

The reusable Blocks collection is available from [`blocks/`](blocks/) or [`blocks/index.html`](blocks/index.html).

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

GitHub Actions validates release-critical project health, including JavaScript syntax, repository structure, local references, HTML metadata, package metadata, package contents, release/tag consistency, browser smoke tests, accessibility checks, and visual regression guards.

The v1.3.0 release passed the release and package-publication workflows before publication.

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
- [x] v1.3.0 release
- [x] v1.3.0 GitHub Packages publication
- [x] Animated Dock
- [x] GitHub Activity and Contribution Graph
- [x] Resizable Sidebar
- [x] Media Timeline
- [x] Motion Navbar
- [x] Animated background collection
- [x] Unified template browser theme

### Next

- [ ] Add dedicated previews and documentation for every advanced component
- [ ] Connect GitHub activity/graph components to configurable data sources
- [ ] Add full pixel-baseline visual snapshots
- [ ] Expand advanced component APIs
- [ ] Continue growing the Blocks collection
- [ ] Plan the next package release based on real-world usage

## License

MIT. See [`LICENSE`](LICENSE).
