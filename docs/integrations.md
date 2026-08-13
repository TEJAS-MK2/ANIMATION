# Multi-language and framework integrations

ANIMATION is a web-first toolkit. The core components remain HTML, CSS, and JavaScript, while these integration recipes show how to use the same animation patterns inside different ecosystems.

Every recipe follows the same contract:

1. **Installation** — what to add to the project.
2. **Component usage** — how to place an ANIMATION component.
3. **Styling** — where component CSS and framework styles belong.
4. **Animation initialization** — when browser behavior should start.
5. **Framework caveats** — SSR, hydration, lifecycle, or platform-specific concerns.

> The examples are intentionally minimal. Use the component's reference implementation for the complete markup and behavior.

## Support matrix

| Ecosystem | Recipe | Primary integration model |
|---|---|---|
| HTML / CSS / JavaScript | Core web | Copy component source |
| TypeScript | Core web | Typed JavaScript |
| React | JS framework | Component + hooks |
| Next.js | React meta-framework | Client boundary + SSR-safe markup |
| Vue | JS framework | SFC + lifecycle |
| Nuxt | Vue meta-framework | Client-only behavior where required |
| Svelte | Compiler framework | Component lifecycle |
| SvelteKit | Svelte meta-framework | SSR-safe browser initialization |
| Angular | Component framework | Lifecycle + template bindings |
| Solid | Reactive framework | Signals + effects |
| Astro | Content framework | Islands for interactive components |
| Preact | Lightweight React-compatible | Hooks + JSX |
| Lit | Web components | Shadow DOM + lifecycle |
| Alpine.js | Lightweight HTML framework | Declarative directives |
| Qwik | Resumable framework | Client-side event boundaries |
| Tailwind CSS | Utility CSS | Utilities + component keyframes |
| Sass / SCSS | CSS preprocessor | Imported component styles |
| CSS Modules | Scoped CSS | Local class mapping |
| Bootstrap | CSS framework | Bootstrap layout + ANIMATION motion |
| UnoCSS | Atomic CSS | Utility generation + custom motion |
| Python / Flask | Server-rendered web | Templates + static assets |
| Python / Django | Server-rendered web | Templates + static assets |
| PHP / Laravel | Server-rendered web | Blade + Vite/static assets |
| Ruby / Rails | Server-rendered web | ERB + asset pipeline |
| Java / Spring | Server-rendered web | Thymeleaf/static assets |
| C# / ASP.NET | Server-rendered web | Razor + static assets |
| Go | Server-rendered web | Templates + static assets |
| Rust / WASM | Web runtime | WASM + DOM integration |
| Flutter / Dart | Cross-platform | Port the interaction pattern; not the DOM component |
| React Native / Expo | Cross-platform | Port the motion concept; not the DOM component |
| Swift / iOS | Native | Reimplement the motion concept natively |
| Kotlin / Android | Native | Reimplement the motion concept natively |

## Core web: HTML, CSS, JavaScript

### Installation

No framework dependency is required. Copy the component markup, stylesheet, and behavior from the component reference.

### Component usage

```html
<button class="animation-button" data-animation="button">
  Animate
</button>
```

### Styling

Load the component stylesheet after your base reset/theme.

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

- Keep component state local.
- Avoid global listeners unless required.
- Respect `prefers-reduced-motion`.

## TypeScript

### Installation

Use the package or copy the source as appropriate for the project. Keep DOM APIs typed explicitly.

### Component usage

```ts
const button = document.querySelector<HTMLButtonElement>('[data-animation="button"]');
```

### Styling

Use normal CSS, CSS Modules, Sass, or the project's preferred styling system.

### Animation initialization

```ts
button?.addEventListener('click', () => {
  button.classList.toggle('is-active');
});
```

### Caveats

TypeScript does not change browser lifecycle rules. DOM access still belongs in client-side initialization code.

## React

### Installation

Install `@tejas-mk2/animation` from the configured package registry, or copy a component's source when using the source distribution.

### Component usage

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

### Styling

Import the component CSS globally or map its classes through your CSS strategy.

### Animation initialization

Prefer React state, refs, and effects over manual DOM queries.

### Caveats

- Do not mutate DOM during render.
- Clean up listeners created in effects.
- Keep animation state deterministic when possible.

## Next.js

### Installation

Install the package using your project's configured registry.

### Component usage

Interactive components should use a client boundary.

```tsx
'use client';

export function Demo() {
  return <button type="button" className="animation-button">Animate</button>;
}
```

### Styling

Use global CSS, CSS Modules, Tailwind, or the styling system already used by the Next.js application.

### Animation initialization

Run browser-only initialization inside `useEffect` or a client component.

### Caveats

- Never read `window` or `document` during server rendering.
- Avoid layout measurement during render.
- Keep interactive animation out of Server Components.

## Vue / Nuxt

### Installation

Install the package through the project's package manager or copy the component source.

### Component usage

```vue
<script setup>
import { ref } from 'vue';
const active = ref(false);
</script>

<template>
  <button
    type="button"
    :class="['animation-button', { 'is-active': active }]"
    @click="active = !active"
  >
    Animate
  </button>
</template>
```

### Styling

Use `<style scoped>` for local component styles or global CSS when the animation relies on shared keyframes.

### Animation initialization

Use `onMounted` for DOM-dependent behavior and `onBeforeUnmount` for cleanup.

### Caveats

Nuxt can render on the server. Guard browser-only APIs and use client-only boundaries when a component cannot be SSR-safe.

## Svelte / SvelteKit

### Installation

Install the package or copy the source component.

### Component usage

```svelte
<script>
  let active = false;
</script>

<button
  type="button"
  class:active
  class="animation-button"
  on:click={() => active = !active}
>
  Animate
</button>
```

### Styling

Use component `<style>` blocks for local rules and global styles for shared keyframes.

### Animation initialization

Use `onMount` for browser-only DOM work and return cleanup functions for listeners.

### Caveats

SvelteKit performs SSR. Do not access `window`, `document`, or layout APIs during server evaluation.

## Angular

### Installation

Install the package or copy the component source into the Angular application.

### Component usage

```ts
@Component({
  selector: 'app-demo',
  template: `<button type="button" [class.is-active]="active" (click)="active = !active">Animate</button>`
})
export class DemoComponent {
  active = false;
}
```

### Styling

Use component styles for local rules and global styles for shared animation primitives.

### Animation initialization

Use `AfterViewInit` for DOM-dependent work and `OnDestroy` for cleanup.

### Caveats

Prefer Angular bindings and lifecycle APIs over direct DOM manipulation. Use `ElementRef` only when the interaction genuinely requires it.

## Solid

### Installation

Install the package and import component styles.

### Component usage

```tsx
import { createSignal } from 'solid-js';

export function Demo() {
  const [active, setActive] = createSignal(false);
  return <button class={active() ? 'animation-button is-active' : 'animation-button'} onClick={() => setActive(!active())}>Animate</button>;
}
```

### Styling

Use normal CSS or the application's preferred scoped styling solution.

### Animation initialization

Use `onMount` and `onCleanup` for browser resources.

### Caveats

Keep reactive reads inside Solid expressions and avoid unnecessary imperative DOM updates.

## Astro

### Installation

Copy static components directly or install the package for shared source/API usage.

### Component usage

Static animation markup can remain in an `.astro` file. Interactive components should be isolated into an island.

### Styling

Use Astro component styles, global CSS, or Tailwind.

### Animation initialization

Run browser initialization in a client-side script or interactive island.

### Caveats

Astro defaults to server-rendered HTML. Do not assume browser APIs exist while the page is being rendered.

## Preact

Use the React-style recipe with Preact hooks and JSX. Keep DOM work in effects and import the same CSS classes used by the source component.

**Caveat:** verify any third-party React dependency used by a component before relying on Preact compatibility.

## Lit / Web Components

### Installation

Use the component source as a custom element or adapt its markup into a Lit component.

### Component usage

```ts
@customElement('animated-button')
export class AnimatedButton extends LitElement {
  render() {
    return html`<button @click=${this.toggle}>Animate</button>`;
  }
}
```

### Styling

Use Lit `static styles` for local styles. Shared global keyframes may need to be explicitly adopted or duplicated depending on the shadow-DOM strategy.

### Animation initialization

Use `connectedCallback`, `firstUpdated`, or reactive Lit lifecycle methods as appropriate.

### Caveats

Shadow DOM changes CSS scoping. Global ANIMATION selectors may not cross the shadow boundary.

## Alpine.js

### Installation

Load Alpine and the ANIMATION CSS.

### Component usage

```html
<button x-data="{ active: false }" :class="{ 'is-active': active }" @click="active = !active">
  Animate
</button>
```

### Styling

Keep complex keyframes in a stylesheet; use Alpine for state and event wiring.

### Animation initialization

Alpine directives initialize behavior automatically after Alpine starts.

### Caveats

Avoid mixing multiple state systems for the same component unless there is a clear boundary.

## Qwik

Use Qwik event handlers and signals for interaction state. Keep browser-only animation setup inside the appropriate client event/lifecycle boundary.

**Caveat:** Qwik's resumability means initialization should not assume a traditional hydration pass.

## CSS systems

### Tailwind CSS

Use Tailwind for layout and state utilities. Keep complicated keyframes in dedicated CSS when that improves maintainability.

### Sass / SCSS

Import ANIMATION component styles into the application stylesheet and use Sass variables/mixins only around the integration layer.

### CSS Modules

Map source class names through the module import rather than depending on global selectors. Shared keyframes should be exported or defined in a global layer when required.

### Bootstrap

Use Bootstrap for grid, spacing, and base controls; use ANIMATION for motion and interaction states. Avoid stacking competing transition rules on the same property.

### UnoCSS

Map ANIMATION's semantic states to UnoCSS utilities. Keep non-trivial keyframes in a CSS layer when generating them dynamically would be fragile.

## Server-rendered ecosystems

The same web components can be used with server-rendered applications because the browser ultimately receives HTML, CSS, and JavaScript.

### Python / Flask

**Installation:** add the ANIMATION assets to `static/` or serve them through your frontend build.

**Usage:** render component HTML from Jinja templates.

**Styling:** link component CSS from the static asset directory.

**Initialization:** load the component JavaScript after the markup or with `defer`.

**Caveat:** Flask does not provide client-side lifecycle management; all interaction lifecycle belongs to browser JavaScript.

### Python / Django

Use Django templates for markup and staticfiles for ANIMATION CSS/JS. Initialize behavior after the DOM is ready.

**Caveat:** keep static asset paths compatible with `collectstatic` and avoid assuming development-server URLs in production.

### PHP / Laravel

Use Blade for markup and Vite/public assets for component CSS/JS.

**Caveat:** server rendering does not replace browser initialization; keep interactive code client-side.

### Ruby / Rails

Use ERB for markup and the application's asset pipeline for CSS/JS.

**Caveat:** make sure animation assets survive the production asset fingerprinting process.

### Java / Spring

Use Thymeleaf or another view engine for markup and static resources for CSS/JS.

**Caveat:** server-side templates should not execute browser-only animation code.

### C# / ASP.NET

Use Razor views/components for markup and the normal static asset pipeline for CSS/JS.

**Caveat:** keep DOM APIs on the browser side and respect CSP requirements.

### Go

Use `html/template` for markup and serve component CSS/JS as static assets.

**Caveat:** avoid generating unsafe HTML; animation behavior should remain progressive enhancement.

## Rust / WebAssembly

Use the ANIMATION HTML/CSS layer directly and connect WASM to the DOM only where application logic needs it.

**Caveats:**

- Keep the animation itself in CSS/Web Animations where possible.
- Avoid moving simple visual effects into WASM unnecessarily.
- Ensure DOM operations run in the browser environment.

## Native and cross-platform ecosystems

Flutter, React Native/Expo, Swift/iOS, and Kotlin/Android cannot consume DOM components directly. For these platforms, this documentation is a **motion-pattern recipe**, not a claim of binary component compatibility.

### Flutter / Dart

Recreate the interaction using Flutter's animation controllers, implicit animations, or slivers. Preserve the timing, easing, gesture, and reduced-motion concepts from the ANIMATION reference.

### React Native / Expo

Translate the component structure into native views and use the platform's animation system. Web-only CSS selectors and DOM APIs do not apply.

### Swift / iOS

Translate the motion using SwiftUI animations or UIKit/Core Animation. Prefer platform-native accessibility and reduced-motion settings.

### Kotlin / Android

Translate the motion using Jetpack Compose animation APIs or Android animation primitives. Respect system animator-duration settings.

## Framework-agnostic initialization checklist

Before shipping an integration:

- [ ] Component markup renders without JavaScript.
- [ ] CSS loads without framework-specific selector conflicts.
- [ ] Browser-only initialization runs at the correct lifecycle point.
- [ ] Event listeners and observers are cleaned up.
- [ ] SSR/hydration does not access browser APIs during render.
- [ ] Keyboard interaction matches pointer interaction.
- [ ] `prefers-reduced-motion` has a useful fallback.
- [ ] Focus remains visible.
- [ ] Animation does not communicate state through motion alone.
- [ ] The integration does not introduce duplicate transitions or competing transforms.

## Choosing a recipe

If your application is primarily web-based, start with the closest framework recipe and keep the ANIMATION component's HTML/CSS contract intact. If your target is a native platform, use the native recipes as motion design guidance rather than attempting to emulate the DOM.
