# ANIMATION starter projects

These starter definitions are intentionally small and framework-specific. They are used as integration fixtures rather than as a second component library.

## Starter matrix

| Starter | Purpose | Integration source |
|---|---|---|
| `core-web` | HTML/CSS/JS baseline | Core component source |
| `react` | React component integration | React recipe |
| `vue` | Vue SFC integration | Vue recipe |
| `svelte` | Svelte component integration | Svelte recipe |
| `astro` | Astro island integration | Astro recipe |
| `tailwind` | Utility-CSS integration | Tailwind recipe |
| `flask` | Python server-rendered integration | Flask recipe |
| `django` | Python server-rendered integration | Django recipe |
| `laravel` | PHP server-rendered integration | Laravel recipe |
| `rails` | Ruby server-rendered integration | Rails recipe |
| `spring` | Java server-rendered integration | Spring recipe |
| `aspnet` | C# server-rendered integration | ASP.NET recipe |
| `go` | Go server-rendered integration | Go recipe |
| `rust-wasm` | Rust/WASM browser integration | Rust/WASM recipe |

## Fixture requirements

Every starter must demonstrate the same component, styling, initialization, accessibility, and reduced-motion behavior. The starter should remain minimal enough to be used as a regression fixture.

## Validation

Starter fixtures are considered ready for the tested matrix when they:

- render the component without console errors;
- work at desktop and mobile widths;
- preserve keyboard interaction;
- respect reduced motion;
- use no production secrets;
- do not depend on live external activity data;
- can be rebuilt from a clean checkout.

The framework integration contract is documented in [`../docs/integrations.md`](../docs/integrations.md).
