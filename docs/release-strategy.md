# Release strategy

ANIMATION releases are driven by evidence from real usage rather than component count alone.

## Inputs

Before the next package release, review:

- recurring issues and bug reports;
- component adoption and download/package usage where available;
- framework integration feedback;
- browser and accessibility regressions;
- visual regression results;
- documentation gaps;
- performance problems on mobile/low-powered devices;
- requests that affect the public package API.

## Release gates

A candidate should not be tagged until:

1. the public API is documented;
2. browser tests pass;
3. accessibility checks pass;
4. visual regression passes;
5. package contents are validated;
6. release metadata matches the package version;
7. no secrets or unexpected network dependencies are present;
8. migration notes exist for breaking changes;
9. framework recipes are updated when the public API changes.

## Patch vs minor vs major

### Patch

Bug fixes, documentation corrections, compatibility fixes, and non-breaking visual corrections.

### Minor

New components, blocks, options, adapters, and recipes that preserve existing APIs.

### Major

Breaking public API changes, removed exports, changed component contracts, or behavior that requires migration.

## Usage-driven prioritization

Prioritize work that improves the most commonly used components, removes repeated integration friction, or fixes cross-browser/accessibility problems. Avoid adding features solely to increase the component count.

## Next release candidate checklist

- [ ] Review issue and usage signals.
- [ ] Freeze public API.
- [ ] Update changelog.
- [ ] Update README and package documentation.
- [ ] Run full CI.
- [ ] Validate package tarball.
- [ ] Create release tag only after all gates pass.
