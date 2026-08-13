# ANIMATION integration system

ANIMATION is a web-first toolkit. The core implementation remains HTML, CSS, and JavaScript. Integration recipes show how to use the same component and motion patterns across different ecosystems without pretending that every platform can consume DOM components directly.

## Architecture

```text
ANIMATION
│
├── Core Web
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
├── JS Frameworks
│   ├── React
│   ├── Vue
│   ├── Svelte
│   ├── Angular
│   ├── Solid
│   └── Astro
│
├── CSS Systems
│   ├── Tailwind
│   ├── Sass
│   ├── CSS Modules
│   └── Bootstrap
│
└── Backend / Full-stack Recipes
    ├── Python
    ├── PHP
    ├── Ruby
    ├── Java
    ├── C#
    ├── Go
    └── Rust/WASM
```

The architecture above is the canonical top-level navigation model. Additional recipes such as Next.js, Nuxt, SvelteKit, Preact, Lit, Alpine.js, Qwik, UnoCSS, and native platforms live underneath the closest ecosystem category.

## Recipe contract

Every integration recipe should answer the same five questions:

1. **Installation** — what to add to the project.
2. **Component usage** — how to place an ANIMATION component.
3. **Styling** — where component CSS and framework styles belong.
4. **Animation initialization** — when browser behavior should start.
5. **Framework-specific caveats** — SSR, hydration, lifecycle, asset pipelines, or platform constraints.

Recipes should also cover accessibility and production considerations where they materially affect the integration.

## Support matrix

| Category | Ecosystems |
|---|---|
| Core Web | HTML, CSS, JavaScript |
| JS Frameworks | React, Vue, Svelte, Angular, Solid, Astro |
| CSS Systems | Tailwind, Sass/SCSS, CSS Modules, Bootstrap |
| Backend / Full-stack | Python, PHP, Ruby, Java, C#, Go, Rust/WASM |
| Additional web recipes | TypeScript, Next.js, Nuxt, SvelteKit, Preact, Lit, Alpine.js, Qwik, UnoCSS |
| Native motion recipes | Flutter/Dart, React Native/Expo, Swift/iOS, Kotlin/Android |

## Core Web

### Installation

No framework dependency is required. Copy the component markup, stylesheet, and behavior from the component reference.

### Component usage

```html
<button class="animation-button" data-animation="button">
  Animate
</button>
```

### Styling

Load component styles after your base reset/theme.

```html
<link rel="stylesheet" href="./animation-button.css">
```

### Animation initialization

Initialize browser behavior after the DOM exists.

```js
const button = document.querySelector('[data-animation="button"]');
button?.addEventListener('click', () => button.classList.toggle('is-active'));
```

### Caveats

Keep state local, clean up listeners, and respect `prefers-reduced-motion`.

## JavaScript Frameworks

### React

**Installation:** install `@tejas-mk2/animation` from the configured package registry or copy the source component.

**Component usage:** use React state for interactive state and keep browser effects in refs/effects.

```tsx
import { useState } from 'react';

export function AnimatedButton() {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      className={active ? 'animation-button is-active' : 'animation-button'}
      onClick={() => setActive(value => !value)}
    >
      Animate
    </button>
  );
}
```

**Styling:** import component CSS globally or through the project's CSS strategy.

**Initialization:** prefer state, refs, and effects over manual DOM queries.

**Caveats:** do not mutate DOM during render; clean up listeners and keep animation state deterministic.

### Vue

**Installation:** install the package or copy the source component.

**Component usage:** use SFC templates, `ref`, and event bindings.

```vue
<script setup>
import { ref } from 'vue';
const active = ref(false);
</script>

<template>
  <button type="button" :class="['animation-button', { 'is-active': active }]" @click="active = !active">
    Animate
  </button>
</template>
```

**Styling:** use `<style scoped>` for local rules or global CSS for shared keyframes.

**Initialization:** use `onMounted` and `onBeforeUnmount` for DOM work and cleanup.

**Caveats:** guard browser-only APIs when using SSR.

### Svelte

**Installation:** install the package or copy the component source.

**Component usage:** keep interaction state in component variables.

```svelte
<script>
  let active = false;
</script>

<button class="animation-button" class:is-active={active} on:click={() => active = !active}>
  Animate
</button>
```

**Styling:** use component `<style>` blocks and global CSS for shared keyframes.

**Initialization:** use `onMount` for browser-only work and return cleanup functions.

**Caveats:** SvelteKit performs SSR, so do not access `window`, `document`, or layout APIs during server evaluation.

### Angular

**Installation:** install the package or copy the source into the Angular application.

**Component usage:** use Angular bindings and component state.

```ts
@Component({
  selector: 'app-demo',
  template: `<button type="button" [class.is-active]="active" (click)="active = !active">Animate</button>`
})
export class DemoComponent {
  active = false;
}
```

**Styling:** use component styles locally and global styles for shared animation primitives.

**Initialization:** use `AfterViewInit` and `OnDestroy` for DOM work and cleanup.

**Caveats:** prefer Angular bindings over direct DOM manipulation; use `ElementRef` only when necessary.

### Solid

**Installation:** install the package and component styles.

**Component usage:** use signals for interaction state.

```tsx
import { createSignal } from 'solid-js';

export function Demo() {
  const [active, setActive] = createSignal(false);
  return <button class={active() ? 'animation-button is-active' : 'animation-button'} onClick={() => setActive(!active())}>Animate</button>;
}
```

**Styling:** use normal CSS or the application's scoped styling system.

**Initialization:** use `onMount` and `onCleanup` for browser resources.

**Caveats:** avoid unnecessary imperative DOM updates.

### Astro

**Installation:** copy static components or install the package for shared source/API usage.

**Component usage:** static markup can remain in `.astro`; interactive components should be islands.

**Styling:** use Astro styles, global CSS, or Tailwind.

**Initialization:** use a client-side script or interactive island.

**Caveats:** Astro defaults to server-rendered HTML, so browser APIs belong in client code.

### Additional JS framework recipes

- **Next.js:** use client boundaries for interactive components; never read `window` or `document` during server rendering.
- **Nuxt:** use Vue lifecycle hooks and client-only boundaries when browser APIs are required.
- **SvelteKit:** use `onMount` for browser-only initialization.
- **Preact:** use React-compatible hooks/JSX, but verify third-party React dependency compatibility.
- **Lit:** account for Shadow DOM style boundaries and use Lit lifecycle methods.
- **Alpine.js:** use Alpine directives for state and event wiring; keep complex keyframes in CSS.
- **Qwik:** use signals and event boundaries; don't assume a traditional hydration pass.

## CSS Systems

### Tailwind

**Installation:** add Tailwind normally; keep ANIMATION component CSS/keyframes where utility classes become unwieldy.

**Component usage:** use utilities for layout and state while preserving semantic ANIMATION states.

**Styling:** use Tailwind utilities for composition and dedicated CSS for complex motion.

**Initialization:** JavaScript behavior remains framework/lifecycle dependent.

**Caveats:** avoid competing transitions or transforms on the same property.

### Sass / SCSS

Import ANIMATION component styles into the Sass entrypoint. Use Sass variables and mixins around the integration layer rather than rewriting component behavior.

**Caveat:** preserve keyframe names and cascade order when composing styles.

### CSS Modules

Map component class names through module imports. Shared keyframes should live in a global layer when required.

**Caveat:** don't assume global selectors exist when CSS Modules hashes class names.

### Bootstrap

Use Bootstrap for layout, spacing, and base controls; use ANIMATION for motion and interaction states.

**Caveat:** avoid stacking competing Bootstrap and ANIMATION transitions on the same property.

## Backend / Full-stack Recipes

These are **integration recipes**, not backend implementations of ANIMATION. The server renders or serves the HTML/CSS/JavaScript; ANIMATION runs in the browser.

### Python — Flask

**Installation:** serve ANIMATION assets from `static/` or your frontend build.

**Component usage:** render component HTML from Jinja templates.

**Styling:** link component CSS from the static asset directory.

**Initialization:** load component JavaScript after markup or with `defer`.

**Caveat:** browser lifecycle belongs to client-side JavaScript, not Flask.

### Python — Django

**Installation:** use Django staticfiles for ANIMATION assets.

**Component usage:** render component markup in Django templates.

**Styling:** serve CSS through `collectstatic`.

**Initialization:** load/defer browser JavaScript after the DOM is available.

**Caveat:** don't rely on development-server asset URLs in production.

### PHP — Laravel

**Installation:** use Vite/public assets for ANIMATION CSS/JS.

**Component usage:** render markup with Blade.

**Styling:** import component CSS through the Laravel asset pipeline.

**Initialization:** initialize in browser code after the relevant markup exists.

**Caveat:** server rendering does not replace browser initialization.

### Ruby — Rails

**Installation:** use the Rails asset pipeline/build system.

**Component usage:** render component markup through ERB.

**Styling:** include component CSS in the application stylesheet.

**Initialization:** load browser behavior through the application's JS entrypoint.

**Caveat:** ensure production asset fingerprinting includes animation assets.

### Java — Spring

**Installation:** serve component assets from Spring static resources.

**Component usage:** render markup with Thymeleaf or another view engine.

**Styling:** reference component CSS from static resources.

**Initialization:** initialize browser behavior after rendering.

**Caveat:** server templates must not execute browser-only APIs.

### C# — ASP.NET

**Installation:** place ANIMATION assets in the application's static web root or frontend build.

**Component usage:** render through Razor views/components.

**Styling:** use the normal static asset pipeline.

**Initialization:** load browser scripts after the markup.

**Caveat:** keep DOM APIs client-side and account for CSP policies.

### Go

**Installation:** serve component assets as static files.

**Component usage:** render markup with `html/template`.

**Styling:** link component CSS from the static asset path.

**Initialization:** defer browser JavaScript until the markup is available.

**Caveat:** keep generated HTML safe; animation should remain progressive enhancement.

### Rust / WASM

**Installation:** keep the ANIMATION HTML/CSS layer and add WASM only for application logic that benefits from it.

**Component usage:** connect WASM to DOM elements when required.

**Styling:** keep visual effects in CSS/Web Animations where practical.

**Initialization:** initialize WASM in the browser environment.

**Caveats:** don't move simple visual effects into WASM unnecessarily and don't perform browser DOM operations outside the browser runtime.

## Native motion recipes

Flutter/Dart, React Native/Expo, Swift/iOS, and Kotlin/Android **cannot consume ANIMATION DOM components directly**. These recipes translate the motion concept into the platform's native animation system.

- **Flutter/Dart:** use animation controllers, implicit animations, or slivers.
- **React Native/Expo:** use native views and the platform animation system; web CSS selectors do not apply.
- **Swift/iOS:** use SwiftUI animations or UIKit/Core Animation.
- **Kotlin/Android:** use Jetpack Compose animation APIs or Android animation primitives.

Preserve timing, easing, gesture behavior, state transitions, accessibility, and reduced-motion behavior rather than attempting to reproduce DOM internals.

## Accessibility and production checklist

Before shipping an integration:

- [ ] Component markup has a usable non-JavaScript baseline.
- [ ] Styling does not create selector or transition conflicts.
- [ ] Browser-only initialization runs at the correct lifecycle point.
- [ ] Listeners, observers, and animation handles are cleaned up.
- [ ] SSR/hydration does not access browser APIs during render.
- [ ] Keyboard interaction matches pointer interaction.
- [ ] `prefers-reduced-motion` has a useful fallback.
- [ ] Focus remains visible.
- [ ] Animation is not the only way state is communicated.
- [ ] Production asset pipelines include component CSS/JS.
- [ ] CSP, bundling, and cache behavior are compatible with the integration.

## Choosing a recipe

For a web application, start with the closest framework recipe and preserve the component's HTML/CSS contract. For server-rendered applications, use the backend recipe to serve the same browser assets. For native platforms, use the native recipe as motion-design guidance rather than attempting to consume the DOM component directly.
