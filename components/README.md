# Animation Components

The library now contains **28 starter components**. Each demo is designed to be copyable and progressively reusable.

## Categories

- Hover: magnetic, glow, underline, ripple, border beam, modal, toast, dropdown, tooltip
- Text: reveal, scramble, typewriter, gradient, letter wave, count up, tabs, accordion
- Cards: tilt, spotlight, depth, flip, elastic
- Backgrounds: aurora, grid pulse, particles, mesh gradient, loading, scroll reveal, cursor highlight

## New in the v1.1 development line

Modal, Toast, Dropdown, Tooltip, Tabs, Accordion, Loading, Scroll Reveal, and Cursor Highlight provide practical interface primitives in addition to decorative effects.

## Design rules

1. Prefer CSS-first motion when JavaScript is unnecessary.
2. Keep interactions responsive and lightweight.
3. Respect `prefers-reduced-motion`.
4. Keep components dependency-free unless a dependency provides substantial value.
5. Every new component should include a live preview and a copyable minimal snippet.
6. Important content and controls must remain usable without animation.

## Adding a component

Add metadata to the registry, add the corresponding component source, document its intended use, and add it to the browser smoke-test list. Keep the component self-contained and make the copied snippet usable without the showcase shell.
