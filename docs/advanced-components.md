# Advanced component documentation

This page is the documentation index for the advanced interaction components introduced in v1.3.0.

## Animated Dock

**Purpose:** magnetic desktop-style navigation with keyboard and pointer support.

### Usage

Use the component source from `components/animated-dock.html` and provide stable links/buttons for each item.

### API contract

- `items`: ordered navigation items
- `active`: active item identifier
- `magnification`: maximum hover scale
- `spring`: motion response configuration
- `tooltip`: whether labels are exposed on hover/focus

### Accessibility

Every item must remain keyboard reachable, have an accessible name, and provide a non-animated active state.

## GitHub Activity

**Purpose:** compact repository/activity presentation.

### Data contract

The renderer should consume normalized activity records rather than assuming a specific API response:

```js
{
  date: '2026-08-13',
  count: 7,
  level: 3,
  label: '7 contributions'
}
```

### Data sources

Supported sources are described in [`data-sources.md`](data-sources.md). Static JSON is the recommended default for demos and build-time sites.

### Accessibility

Do not rely on color alone to communicate contribution intensity. Provide text/tooltips for exact values.

## GitHub Contribution Graph

**Purpose:** year/month contribution visualization.

### Data contract

```js
{
  date: '2026-08-13',
  count: 12,
  level: 4
}
```

The component should accept pre-normalized data so GitHub API access remains optional.

## Resizable Sidebar

**Purpose:** persistent navigation with desktop resizing and mobile drawer behavior.

### API contract

- `minWidth`
- `maxWidth`
- `defaultWidth`
- `collapsed`
- `mobileBreakpoint`
- `persistKey`

Resize interactions must have a keyboard-accessible alternative and must not create continuous layout thrashing.

## Media Timeline

**Purpose:** interactive timeline/scrubber for media and other time-based content.

### API contract

- `duration`
- `currentTime`
- `buffered`
- `markers`
- `preview`
- `step`

Use the native media element as the source of truth where applicable.

## Motion Navbar

**Purpose:** responsive navigation with animated state transitions.

### API contract

- `items`
- `active`
- `mobileMode`
- `transition`
- `reducedMotion`

The navigation must remain fully usable when animation is disabled.

## Documentation standard

Every advanced component should provide:

1. A live preview.
2. Source code.
3. API/options reference.
4. Styling guidance.
5. Framework integration examples.
6. Keyboard and reduced-motion behavior.
7. Mobile behavior.
8. Performance notes.
9. Browser test coverage.
10. A known-limitations section.
