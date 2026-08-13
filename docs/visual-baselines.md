# Visual baseline testing

ANIMATION uses browser and visual regression checks to protect component appearance across releases.

## Baseline policy

Each advanced component should have a deterministic baseline state:

- fixed viewport
- fixed sample data
- no external network dependency
- animations paused or settled before capture
- fonts loaded before capture
- reduced-motion state tested separately where relevant

## Required baseline states

For interactive components, capture at minimum:

1. Default desktop state.
2. Focus-visible state.
3. Active/open state.
4. Mobile state.
5. Reduced-motion state when animation changes layout/visibility.
6. Empty/error state for data-driven components.

## Pixel-baseline rules

- Keep fixture data deterministic.
- Avoid timestamps and random IDs in screenshots.
- Do not use live GitHub data for a baseline.
- Allow only intentional anti-aliasing tolerance.
- Review visual diffs as UI changes, not as test noise.

## CI integration

The existing visual workflow should remain the release gate. New snapshots must be added only after the component's browser behavior is stable.

## Local workflow

```bash
npm run test:visual
```

If the visual command reports a mismatch, inspect the generated report and determine whether the change is an intended design update or a regression before updating a baseline.
