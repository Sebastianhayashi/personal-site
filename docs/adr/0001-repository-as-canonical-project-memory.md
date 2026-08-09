# ADR 0001: Repository as canonical project memory

Date: 2026-08-10
Status: Accepted

## Context

This project is expected to span many conversations, agents, and future kinds of work. Chat history alone is not a reliable long-term source of project state.

## Decision

Use `Sebastianhayashi/personal-site` as the canonical durable project state.

Persist:

- project purpose and boundaries in `PROJECT.md`;
- stable language and invariants in `CONTEXT.md`;
- distilled discovery notes in `docs/discovery/`;
- consequential decisions in `docs/adr/`;
- executable product/feature intent in `docs/specs/`;
- resumable lifecycle state in `.agent/`.

Do not use raw conversation transcripts as the default memory format.

## Consequences

A fresh agent should be able to restore context by reading the repository. Chat memory can improve convenience but is not required for correctness.

Repository visibility affects what may be persisted. When privacy has not been verified, only public-safe state should be written.
