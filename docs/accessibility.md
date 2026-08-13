# Accessibility and motion

ANIMATION treats motion as enhancement, not a requirement.

## Required behavior

- Respect `prefers-reduced-motion: reduce` for non-essential animation.
- Preserve keyboard access to every interactive control.
- Never communicate state only through movement, color, or hover.
- Keep focus indicators visible.
- Keep animated content readable at rest.
- Avoid continuous animation when it does not add meaningful value.
- Avoid large, rapid movement that can create discomfort.

## Component checklist

Before adding a component, verify:

1. It works with keyboard and touch input.
2. Its important content remains available when animation is disabled.
3. It has a sensible static fallback.
4. Any interactive element has an accessible name.
5. Decorative effects are not exposed as meaningful content to assistive technology.

## Testing

Run the repository quality checks and browser tests before release. Browser tests cover page loading, navigation, component source pages, and basic mobile viewport behavior. Manual keyboard and screen-reader testing is still recommended for new interactive patterns.
