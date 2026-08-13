# Security Policy

## Supported versions

ANIMATION is actively maintained. Security fixes are prioritized for the latest stable release and the current `main` branch when practical.

| Version | Security support |
|---|---|
| Latest stable release | Supported |
| `main` | Supported during active development |
| Older releases | Best effort; upgrade recommended |

## Reporting a vulnerability

Please **do not open a public GitHub issue for an undisclosed security vulnerability**.

Use GitHub's private security reporting features when they are enabled for this repository. If private reporting is unavailable, contact the project maintainer through the contact method listed on the repository profile and provide only the information necessary to reproduce and assess the issue.

When reporting, include:

- A concise description of the vulnerability.
- Affected file, component, package, workflow, or feature.
- Reproduction steps or a minimal proof of concept.
- Potential impact and affected versions.
- Suggested mitigation, if known.
- Whether the issue is exploitable in the default configuration.

Please do not include passwords, access tokens, private keys, personal data, or other secrets in a report. Redact sensitive values from logs and screenshots.

## What to expect

Maintainers will review valid reports, investigate the affected code, and coordinate a fix or mitigation when appropriate. Please allow reasonable time for investigation before publicly disclosing the vulnerability.

When a fix is available, maintainers may publish a security advisory, release note, patch release, or other appropriate notification depending on severity and affected distribution channels.

## Scope

Security reports may include issues such as:

- Cross-site scripting (XSS).
- Unsafe DOM manipulation or injection.
- Dependency or supply-chain vulnerabilities.
- Malicious or unexpected network requests.
- Credential or secret exposure.
- GitHub Actions, package-release, or deployment security issues.
- Vulnerabilities in downloadable, generated, or copy-paste component code.
- Unsafe template or block behavior.
- Security problems introduced by framework integration examples.

## Package and example security

ANIMATION is designed to be a web-first UI toolkit. Copy-paste examples should not request credentials, collect user data, add tracking, or make unexpected network requests unless that behavior is explicitly documented and intentionally required.

Framework and backend recipes are integration guidance. Applications using ANIMATION remain responsible for their own authentication, authorization, CSP, dependency management, server security, and data handling.

## Out of scope

Visual bugs, ordinary functional bugs, documentation errors, and feature requests should normally be reported through GitHub issues instead of the private security channel unless they create a demonstrable security impact.

## Responsible disclosure

Please give maintainers a reasonable opportunity to investigate and address a vulnerability before public disclosure. Coordinated disclosure helps protect users while a fix is being developed.
