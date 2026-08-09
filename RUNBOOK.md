# Agent Runbook

## Restore project context

At the start of a new substantial session, read in this order:

1. `AGENTS.md`
2. `PROJECT.md`
3. `CONTEXT.md`
4. `.agent/state.json`
5. `.agent/checkpoint.md`
6. relevant files under `docs/adr/`, `docs/discovery/`, and `docs/specs/`
7. current GitHub issue/PR/commit references named by the checkpoint

GitHub repository state is canonical. Treat chat history and local agent memory as replaceable caches.

## Work routing

- Unclear direction: stay in discovery and distill the result into `docs/discovery/`, `PROJECT.md`, or `CONTEXT.md`.
- Consequential decision: create an ADR under `docs/adr/`.
- Clear feature/product change: create or update a spec under `docs/specs/` before non-trivial implementation.
- Implementation: keep changes tied to an exact issue/spec/branch and verify before completion.

Prefer small, composable workflows over a monolithic process. Matt Pocock's skill philosophy is an influence, but this repository's own project contract and current state are authoritative.

## Persistence rules

- Persist decisions, stable vocabulary, constraints, and resumable state.
- Do not persist raw chat transcripts unless explicitly requested.
- Do not persist secrets, credentials, private network/infrastructure data, or identifiable client details.
- When repository visibility has not been verified private, write public-safe context only.
- After substantial work, refresh `.agent/checkpoint.md`.

## Completion rule

Do not claim substantial work is complete unless the material mutation can be read back from GitHub and any required verification has evidence tied to the exact commit or PR.
