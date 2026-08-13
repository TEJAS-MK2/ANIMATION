# Framework starter fixtures

These are small, executable integration fixtures for the canonical JavaScript framework recipes.

| Framework | Directory | Build command |
|---|---|---|
| React | `react/` | `npm run build` |
| Vue | `vue/` | `npm run build` |
| Svelte | `svelte/` | `npm run build` |
| Angular | `angular/` | `npm run build` |
| Solid | `solid/` | `npm run build` |
| Astro | `astro/` | `npm run build` |

The fixtures use the repository package through a local `file:` dependency so CI does not need package-registry credentials. They intentionally stay small: their purpose is to prove installation, component import/reference, styling, and production builds rather than act as full application templates.
