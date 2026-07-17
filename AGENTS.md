## Project

Personal site built with Astro (static output only — no client-side framework, no tracking scripts; JS only for Lenis smooth scrolling). Content is Markdown with frontmatter, validated by the schema in `src/content.config.ts`.

## Conventions

- UI copy is in Chinese; article body keeps the author's mixed zh/en voice. Light copyediting only — never rewrite his opinions or "optimize" his voice.
- All internal links must be relative (`./`, `../`) so built pages also work over `file://`. Layouts take a `root` prop (`'.'` for top-level pages, `'..'` for one level deep) to compute relative prefixes.
- One stylesheet only (`public/css/style.css`). Keep it minimal, fast, and print-friendly.
- New posts: create `src/content/posts/<pinyin-slug>.md` with the frontmatter model (type / stage / planted / topics / summary / direction). Homepage lists and post pages generate automatically at build time.
- New directions: create `src/content/directions/<slug>.md` (宣言 + 时间线 + 归档 + 经验, reuse `.timeline`/`.badge` classes in raw HTML blocks); set `page: false` if it should only appear as a homepage card. Homepage cards generate automatically.
- Homepage 作品选辑 entries live in `src/data/works.ts`.
- Attribution: third-party tools/skills mentioned in content must be credited with a link to the upstream repo (e.g. cangjie-skill by kangarooking, teach skill by Matt Pocock, humanizer-zh by op7418). Never present them as the author's own work.
- Privacy red lines: no homelab IPs, addresses/regions, server details, API keys, or identifiable client info (e.g. only "一位做茶叶生意的朋友", no brand names). No 命理/紫微 content.

## Deploy

Push to `main`. The workflow runs `astro build` and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves. Do not force-push, do not rewrite history.
