# Configurable data sources

The GitHub Activity and GitHub Contribution Graph components are presentation components. They do not require a GitHub token or a specific backend.

## Normalized contract

Both components can consume an array of normalized records:

```js
[
  { date: '2026-08-11', count: 4, level: 2 },
  { date: '2026-08-12', count: 0, level: 0 },
  { date: '2026-08-13', count: 8, level: 3 }
]
```

### Source options

| Source | Best for | Client token required |
|---|---|---:|
| Static JSON | Docs, portfolios, static sites | No |
| Build-time generated JSON | SSG/CI deployments | No in browser |
| GitHub REST/GraphQL adapter | Live GitHub data | Usually yes for higher limits |
| Custom API endpoint | Private analytics/backends | Depends on API |
| Local application state | Dashboards/apps | No |

## Adapter contract

Keep network access outside the visual component. An adapter should expose:

```js
async function loadActivity() {
  return [
    { date: '2026-08-13', count: 8, level: 3 }
  ];
}
```

The component then receives the returned data and renders it.

## Why this architecture

- Avoids shipping credentials in browser code.
- Keeps the component framework-agnostic.
- Allows GitHub, GitLab, Bitbucket, custom analytics, or static data.
- Makes demos deterministic.
- Makes visual regression tests independent of network availability.

## Production guidance

Do not put GitHub personal access tokens in client-side JavaScript. Prefer a server-side proxy, build-time generation, or a public endpoint with appropriately scoped access.

Cache external activity data when possible and provide an empty/error state rather than blocking the UI on a network request.

## Empty and error states

Adapters should return one of three states:

```js
{ status: 'ready', data: [...] }
{ status: 'empty', data: [] }
{ status: 'error', error: 'Unable to load activity' }
```

The visual component should render all three without changing its public layout contract.
