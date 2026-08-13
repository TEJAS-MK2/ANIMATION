# Framework recipes

These recipes are the short, practical entry points into the full [multi-language and framework integration system](integrations.md). Each integration documents installation, component usage, styling, animation initialization, and framework-specific caveats.

## Recommended integrations

- [HTML / CSS / JavaScript](integrations.md#core-web-html-css-javascript)
- [TypeScript](integrations.md#typescript)
- [React](integrations.md#react)
- [Next.js](integrations.md#nextjs)
- [Vue / Nuxt](integrations.md#vue--nuxt)
- [Svelte / SvelteKit](integrations.md#svelte--sveltekit)
- [Angular](integrations.md#angular)
- [Solid](integrations.md#solid)
- [Astro](integrations.md#astro)
- [Preact](integrations.md#preact)
- [Lit / Web Components](integrations.md#lit--web-components)
- [Alpine.js](integrations.md#alpinejs)
- [Qwik](integrations.md#qwik)
- [Tailwind CSS](integrations.md#tailwind-css)
- [Sass / SCSS](integrations.md#sass--scss)
- [CSS Modules](integrations.md#css-modules)
- [Bootstrap](integrations.md#bootstrap)
- [UnoCSS](integrations.md#unocss)
- [Python / Flask](integrations.md#python--flask)
- [Python / Django](integrations.md#python--django)
- [PHP / Laravel](integrations.md#php--laravel)
- [Ruby / Rails](integrations.md#ruby--rails)
- [Java / Spring](integrations.md#java--spring)
- [C# / ASP.NET](integrations.md#c--aspnet)
- [Go](integrations.md#go)
- [Rust / WebAssembly](integrations.md#rust--webassembly)
- [Flutter / Dart](integrations.md#flutter--dart)
- [React Native / Expo](integrations.md#react-native--expo)
- [Swift / iOS](integrations.md#swift--ios)
- [Kotlin / Android](integrations.md#kotlin--android)

## Integration model

ANIMATION is web-first. The canonical implementation is HTML, CSS, and JavaScript. Framework recipes explain how to preserve the same component contract inside different application architectures.

For native platforms such as Flutter, React Native, Swift, and Kotlin, the recipes describe how to reproduce the **motion pattern** rather than claiming that a DOM component can run natively.

## Accessibility checklist

For every recipe:

- Prefer semantic HTML or the platform's semantic equivalent.
- Keep keyboard or assistive interaction equivalent to pointer interaction.
- Preserve visible focus.
- Respect `prefers-reduced-motion` or the platform's reduced-motion setting for non-essential movement.
- Do not communicate state using color or animation alone.
- Avoid animation that blocks the primary task.
- Clean up listeners, observers, timers, and animation resources.

See [`accessibility.md`](accessibility.md) for project-wide guidance and [`integrations.md`](integrations.md) for the complete integration matrix and recipes.
