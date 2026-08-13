# ANIMATION

A lightweight, accessible, open-source UI motion library for the web.

ANIMATION provides copy-ready components, complete page blocks, templates, and framework integration recipes. The project is intentionally practical: restrained motion, clear hierarchy, responsive layouts, and accessible interaction come first.

## Live site

**GitHub Pages:** https://tejas-mk2.github.io/ANIMATION/

The public site contains the component browser, blocks, templates, integrations, documentation, and interactive demos.

## What is included

| Collection | Description |
| --- | --- |
| **Components** | A growing collection of reusable motion and interaction primitives. |
| **Advanced components** | Higher-level interaction patterns such as Animated Tabs, Command Palette, Magnetic Button, and Toast Stack. |
| **Blocks** | 14 copy-paste website sections covering heroes, features, dashboards, testimonials, FAQs, newsletters, timelines, galleries, teams, bento layouts, and more. |
| **Templates** | 8 complete static starters including Portfolio, SaaS, Docs, Journal, Event, Restaurant, Creative Studio, and Changelog. |
| **Integrations** | Recipes spanning HTML/CSS/JavaScript, React, Vue, Svelte, Angular, Solid, Astro, Tailwind, Sass, CSS Modules, Bootstrap, Python, PHP, Ruby, Java, C#, Go, and Rust/WASM. |

## Components

The component library includes interaction, text, card, background, navigation, and utility patterns such as:

- Hover and pointer interactions
- Magnetic, glow, ripple, and border effects
- Text reveal, scramble, typewriter, gradient, and count-up effects
- Tilt, spotlight, depth, flip, and elastic cards
- Aurora, particle, mesh, grid, noise, liquid, and dot backgrounds
- Modal, dropdown, tooltip, popover, drawer, tabs, accordion, pagination, and breadcrumbs
- GitHub activity and contribution graph components
- Media timeline, motion navigation, progress, loading, and command palette patterns

Each component should remain lightweight, progressively reusable, keyboard-friendly, and compatible with `prefers-reduced-motion`.

## Framework integrations

ANIMATION follows a multi-language/framework integration model. Recipes document installation, component usage, styling, animation initialization, and framework-specific caveats.

```text
ANIMATION
├── Core Web
│   ├── HTML
│   ├── CSS
│   └── JavaScript
├── JS Frameworks
│   ├── React
│   ├── Vue
│   ├── Svelte
│   ├── Angular
│   ├── Solid
│   └── Astro
├── CSS Systems
│   ├── Tailwind
│   ├── Sass
│   ├── CSS Modules
│   └── Bootstrap
└── Backend / Full-stack Recipes
    ├── Python
    ├── PHP
    ├── Ruby
    ├── Java
    ├── C#
    ├── Go
    └── Rust/WASM
```

## Getting started

For the static library, open the component browser and choose a component to preview its implementation:

- `component.html` — component browser
- `components/` — reusable component sources
- `blocks/` — copy-paste page sections
- `templates/` — complete static starters
- `docs/` — integration and runtime documentation

For package-based usage, see `package.json` and the documentation for the current package exports.

## Development

Install dependencies and run the project's checks with the package scripts defined in `package.json`.

The repository also includes framework starter fixtures for React, Vue, Svelte, Angular, Solid, and Astro. CI builds these fixtures on **Node.js 24** to keep the test environment aligned with current framework requirements.

### Quality standards

Before contributing, verify:

- HTML and JavaScript remain valid.
- Components work on mobile and desktop.
- Keyboard navigation remains usable.
- Important content does not depend on animation.
- `prefers-reduced-motion` is respected.
- Links and component references point to real files.
- Framework fixtures build successfully.
- Browser and visual checks pass before release.

## Design principles

1. **Motion with purpose** — animation communicates state, hierarchy, or interaction.
2. **Accessibility first** — motion must never be required to understand or operate the interface.
3. **Responsive by default** — interactions should work across touch, pointer, keyboard, and different viewport sizes.
4. **Lightweight implementation** — prefer platform APIs and CSS when JavaScript or dependencies are unnecessary.
5. **Copy-ready output** — examples should be understandable and reusable outside the showcase site.
6. **Consistent visual language** — components should feel like parts of one library rather than unrelated demos.

## Public website scope

The public library intentionally **does not include pricing or authentication/login flows**. It is designed as an open-source component, block, template, and integration resource.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution workflow, testing, accessibility, and framework-integration guidance.

When adding a component, update its registry metadata, source file, documentation, browser smoke-test coverage, and any relevant integration examples.

## Security

See [`SECURITY.md`](SECURITY.md) for responsible disclosure and supported-version guidance. The security policy is a repository policy; it does not disable screenshots, printing, browser capture, or normal user interaction on the public website.

## License

MIT. See [`LICENSE`](LICENSE).
