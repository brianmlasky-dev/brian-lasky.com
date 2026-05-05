# ADR-001: Honest Reset - Portfolio Technical Stack

**Date:** 2026-05-05  
**Status:** Accepted

## Context

Previous portfolio contained placeholder content with no working infrastructure.
Represented skills and projects that were not demonstrable end-to-end.

## Decision

Rebuild from scratch with honest, working implementations:
- Next.js 16 + TypeScript + Tailwind CSS frontend
- AWS API Gateway → Lambda → SES contact form pipeline
- Real domain (brian-lasky.com) with verified SES identities
- SVG architecture diagram reflecting actual deployed infrastructure

## Consequences

### Positive
- Contact form delivers email end-to-end (verified May 2026)
- Architecture diagram documents real AWS resource IDs
- Every section of the portfolio is testable and honest
- Codebase is committable and reviewable

### Negative
- Fewer projects shown at launch (only real ones)
- SES sandbox limits 200 emails/day until production access approved

## Alternatives Considered

- Keep old portfolio with cosmetic fixes — rejected, fundamentally dishonest
- Use third-party form service (Formspree) — rejected, reduces AWS demonstration value
