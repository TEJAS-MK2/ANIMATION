# Runtime API

The runtime API is the JavaScript/TypeScript integration layer for advanced components. It is intentionally small and framework-neutral.

Import it from the package subpath:

```js
import {
  normalizeActivityData,
  normalizeContributionData,
  createMotionConfig,
  getComponentUrl,
} from '@tejas-mk2/animation/runtime';
```

## Data normalization

`normalizeActivityData(records)` and `normalizeContributionData(records)` convert application data into the normalized shape used by the GitHub Activity and Contribution Graph components.

```js
const data = normalizeActivityData([
  { date: '2026-08-13', count: 7, level: 3 },
]);
```

Counts are clamped to zero, levels to `0..4`, and labels receive a deterministic fallback.

## Motion configuration

`createMotionConfig(options)` produces a bounded configuration suitable for advanced components.

```js
const motion = createMotionConfig({
  duration: 260,
  easing: 'cubic-bezier(.2,.8,.2,1)',
  reducedMotion: true,
});
```

Durations are bounded to `0..10000ms`. Reduced motion remains enabled by default.

## Component URLs

`getComponentUrl(name, base)` builds a stable component source URL for registries, documentation, or download flows.

```js
getComponentUrl('magnetic-button');
// /components/magnetic-button.html
```

## Compatibility

The runtime helpers are additive and do not replace the stable root exports. Keep application data normalized at the integration boundary and avoid coupling components to a specific remote API.

TypeScript declarations are provided in `package/runtime.d.ts`.
