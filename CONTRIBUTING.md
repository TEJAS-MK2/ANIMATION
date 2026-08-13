# Contributing to ANIMATION

Thank you for helping improve ANIMATION.

ANIMATION is a web-first, framework-agnostic animation and UI toolkit. Contributions can include components, blocks, templates, documentation, framework recipes, tests, accessibility improvements, performance work, and tooling.

## Before you contribute

1. Check existing issues and pull requests to avoid duplicate work.
2. Keep changes focused and easy to review.
3. Test affected components on desktop and mobile where practical.
4. Respect the project's MIT license and third-party licenses.
5. Credit external inspiration or source material when appropriate.
6. Do not include secrets, tracking code, unexpected network requests, or generated artifacts unless they are intentionally part of the project.
7. For security vulnerabilities, follow [`SECURITY.md`](SECURITY.md) instead of opening a public issue.

## Adding an animation or component

A good component should include:

- A clear, searchable name and description.
- A working live preview.
- Clean HTML, CSS, and JavaScript where applicable.
- Framework examples when the component has meaningful framework integration.
- Responsive behavior.
- Keyboard-accessible interaction where relevant.
- `prefers-reduced-motion` support for non-essential animation.
- No unnecessary dependencies.
- No tracking, malicious code, or unexpected network requests.
- Documentation and registry metadata.
- Browser coverage for important interactive behavior.

## Adding blocks and templates

Blocks and templates should be practical, reusable, and visually consistent with the ANIMATION site.

For a block or template:

- Keep markup semantic and reasonably portable.
- Make responsive behavior explicit.
- Avoid unnecessary framework coupling.
- Document important customization points.
- Test navigation and interactive states.
- Do not add login/authentication or pricing blocks unless the project roadmap explicitly calls for them.
- Keep third-party assets and licenses clear.

## Framework integrations

Framework recipes should describe the integration rather than falsely claim that every ecosystem can execute the DOM component directly.

Use the standard recipe structure:

**Installation → Component Usage → Styling → Animation Initialization → Framework Caveats → Accessibility/Production Notes**

For web frameworks, document SSR, hydration, lifecycle, and browser-only API considerations. For native ecosystems such as Flutter, React Native, Swift, and Kotlin, describe the equivalent motion pattern rather than claiming DOM compatibility.

## Component quality requirements

Before submitting a new component, verify:

- It has a predictable default state.
- Interactive state is exposed semantically, not only through color or animation.
- Focus remains visible.
- Touch input works where pointer input is supported.
- Reduced motion removes or simplifies non-essential movement.
- The component does not cause avoidable layout shifts or continuous high-CPU work.
- The implementation works without a framework unless explicitly framework-specific.
- Browser-only behavior initializes at the correct lifecycle point.
- Event listeners, observers, and timers are cleaned up.

## Code quality and performance

Prefer readable, maintainable code over clever one-liners. Avoid global side effects, unnecessary polling, layout thrashing, and animations that cause excessive CPU or GPU usage.

Prefer transforms and opacity for animation where possible. Keep interactive effects smooth on lower-powered devices and test touch input when the component depends on pointer movement.

Avoid introducing a dependency solely for a small effect that can be implemented with existing project primitives.

## Accessibility

Motion is enhancement, not a requirement. Contributions should:

- Respect `prefers-reduced-motion`.
- Preserve keyboard access.
- Keep visible focus states.
- Use semantic controls.
- Avoid conveying state through motion or color alone.
- Avoid animation that blocks the user's primary task.

## Pull requests

A pull request should explain:

- What changed.
- Why the change is useful.
- Which files were modified.
- How the change was tested.
- Any browser or dependency requirements.
- Any package or public API impact.
- Any accessibility, performance, or framework considerations.

Use the repository pull-request checklist. Keep pull requests focused; large unrelated redesigns should be split into smaller contributions when practical.

## Commit messages

Use concise messages that describe the change, for example:

```text
Add command palette component
Fix mobile component navigation
Improve reduced-motion handling
Document Vue integration recipe
```

## Testing before submission

Run the checks relevant to your change. For a normal source change, start with:

```bash
npm test
npm run pack:check
npm run test:browser
npm run test:visual
```

If a check is unavailable locally, state that clearly in the pull request instead of claiming it passed.

## Reporting bugs

Use the bug-report template and include:

- Browser and device.
- ANIMATION version or commit.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Console errors when available.
- A screenshot or recording when it helps explain a visual issue.

Do not include tokens, passwords, private URLs, or other sensitive information.

## Security issues

Do not put sensitive security vulnerabilities in a public issue. Follow [`SECURITY.md`](SECURITY.md) instead.

## License

By contributing, you agree that your contribution is provided under the project's MIT License, subject to any applicable third-party rights.
