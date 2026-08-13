# Framework recipes

These recipes show how to integrate ANIMATION patterns into common frontend stacks. The examples are intentionally small so they can be adapted to an existing application.

## Vanilla JavaScript

Copy the component markup and styles from the component reference, then initialize behavior after the DOM is available.

```js
const button = document.querySelector('[data-animation]');
button?.addEventListener('click', () => {
  button.classList.add('is-active');
});
```

Keep component state local and avoid global listeners unless the interaction genuinely needs them.

## React

Treat interactive animation state as component state and keep DOM effects inside event handlers or effects.

```jsx
import { useState } from 'react';

export function AnimatedButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className={active ? 'animation-button is-active' : 'animation-button'}
      onClick={() => setActive((value) => !value)}
    >
      Animate
    </button>
  );
}
```

## TypeScript

Give component options explicit types rather than passing unstructured objects around.

```ts
export type MotionPreference = 'full' | 'reduced';

export interface AnimationOptions {
  duration?: number;
  motion?: MotionPreference;
}
```

## Tailwind CSS

Use Tailwind for layout and state utilities while keeping complex animation keyframes in a dedicated stylesheet when that makes the effect easier to maintain.

```html
<button class="transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
  Hover me
</button>
```

## Next.js

Interactive components should be client components only when they require browser state or event handlers.

```tsx
'use client';

import { useState } from 'react';

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" onClick={() => setOpen(!open)}>
      {open ? 'Close' : 'Open'}
    </button>
  );
}
```

Keep animation markup compatible with server rendering and avoid reading `window`, `document`, or layout measurements during render.

## Accessibility checklist

For every recipe:

- Prefer semantic HTML.
- Keep keyboard interaction equivalent to pointer interaction.
- Preserve visible focus.
- Respect `prefers-reduced-motion` for non-essential movement.
- Do not communicate state using color alone.
- Avoid animation that blocks the primary task.

See [`accessibility.md`](accessibility.md) for the project-wide guidance.
