# Project Context

## Shared language

### personal-site
The whole long-term project and canonical repository. It is broader than the website.

### site
The Astro-based personal website currently implemented in this repository. It is one public surface of `personal-site`.

### surface
A place where selected material appears publicly, such as the website, GitHub profile, an article page, or a future publishing channel.

### corpus
The durable body of public-safe source material: writing, ideas, projects, notes, decisions, and selected work that may feed one or more surfaces.

### source material
The canonical version of an idea or piece of content before deciding how it should be presented on a particular surface.

### discovery
The lifecycle state used while the desired outcome is still being clarified. Discovery work should refine intent and language, not trigger implementation by default.

### public-safe
Information that can safely exist in a public repository. When repository privacy is uncertain, persist only public-safe context.

## Invariants

1. The website is a surface, not the project boundary.
2. Repository-backed project state is canonical; chat memory is replaceable.
3. Preserve the author's mixed Chinese/English voice and opinions. Do not rewrite them into generic brand language.
4. Distill durable decisions and context instead of storing raw conversation transcripts.
5. Existing privacy constraints in `AGENTS.md` apply across all future surfaces.
6. Do not introduce secrets or personal/private infrastructure details into durable project memory.
7. Non-trivial implementation should be grounded in a concrete objective, spec, issue, or ADR.

## Current known surfaces

- Personal website
- GitHub presence/profile
- Articles and essays
- Ideas and notes intended for future public use

This list is intentionally open-ended. New surfaces can be added without redefining the project identity.
