# Animation Components

The homepage ships with 20 starter demos. Each demo is designed to be copyable and progressively reusable.

## Categories

- Hover: magnetic, glow, underline, ripple, border beam
- Text: reveal, scramble, typewriter, gradient, letter wave, count up
- Cards: tilt, spotlight, depth, flip, elastic
- Backgrounds: aurora, grid pulse, particles, mesh gradient

## Design rules

1. Prefer CSS-first motion when JavaScript is unnecessary.
2. Keep interactions responsive and lightweight.
3. Respect `prefers-reduced-motion`.
4. Keep components dependency-free unless a dependency provides substantial value.
5. Every new component should include a live preview and a copyable minimal snippet.

## Adding a component

Add its metadata to the starter registry in `app.js`, then add the corresponding demo styles to `styles.css`. Keep the demo self-contained and make the copied snippet usable without the showcase shell.
