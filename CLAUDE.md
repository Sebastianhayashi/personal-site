## Project

Static personal site — plain HTML + one CSS file (`css/style.css`). No build step, no JavaScript, no frameworks. Do not introduce a static-site generator.

## Conventions

- UI copy is in Chinese; article body keeps the author's mixed zh/en voice. Light copyediting only — never rewrite his opinions or "optimize" his voice.
- All internal links must be relative (`./`, `../`) so every page works over `file://`.
- One stylesheet only. Keep it minimal, fast, and print-friendly.
- New posts: create `posts/<pinyin-slug>.html`, then add an entry to the article list in `index.html`.
- New directions: create `directions/<slug>.html` (宣言 + 时间线 + 归档 + 经验, reuse `.timeline`/`.badge` components), then add a card to the directions list in `index.html`.
- Attribution: third-party tools/skills mentioned in content must be credited with a link to the upstream repo (e.g. cangjie-skill by kangarooking, teach skill by Matt Pocock, humanizer-zh by op7418). Never present them as the author's own work.
- Privacy red lines: no homelab IPs, addresses/regions, server details, API keys, or identifiable client info (e.g. only "一位做茶叶生意的朋友", no brand names). No 命理/紫微 content.

## Deploy

Push to `main`. The workflow publishes the repo root to the `gh-pages` branch, which GitHub Pages serves. Do not force-push, do not rewrite history.
