# Contributing to ANIMATION

Thank you for helping improve ANIMATION.

## Before you contribute

Please:

1. Check existing issues and pull requests to avoid duplicate work.
2. Keep changes focused and easy to review.
3. Test the affected component on desktop and mobile.
4. Respect the project's MIT license and third-party licenses.
5. Credit external inspiration or source material when appropriate.

## Adding an animation or component

A good component should include:

- A clear name and description.
- A working live preview.
- Clean HTML, CSS, and JavaScript where applicable.
- Framework examples when supported by the component system.
- Responsive behavior.
- Keyboard-accessible interaction where relevant.
- `prefers-reduced-motion` support for non-essential animation.
- No unnecessary dependencies.
- No tracking, malicious code, or unexpected network requests.

## Code quality

Prefer readable, maintainable code over clever one-liners. Avoid global side effects, unnecessary polling, layout thrashing, and animations that cause excessive CPU usage.

Use transforms and opacity for animation where possible. Keep interactive effects smooth on lower-powered devices and test touch input when the component depends on pointer movement.

## Pull requests

A pull request should explain:

- What changed.
- Why the change is useful.
- Which files were modified.
- How the change was tested.
- Any browser or dependency requirements.

Keep pull requests focused. Large unrelated redesigns should be split into smaller contributions when practical.

## Commit messages

Use concise messages that describe the change, for example:

```text
Add magnetic button component
Fix mobile component navigation
Improve reduced-motion handling
```

## Reporting bugs

When reporting a bug, include:

- Browser and device.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Console errors when available.
- A screenshot or recording when it helps explain a visual issue.

## Security issues

Do not put sensitive security vulnerabilities in a public issue. Follow [SECURITY.md](SECURITY.md) instead.

## License

By contributing, you agree that your contribution is provided under the project's MIT License, subject to any applicable third-party rights.
