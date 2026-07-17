# personal-site

Sebastian Lim 的个人网站：<https://sebastianhayashi.github.io/personal-site/>

Astro 静态站点（输出纯 HTML，无客户端框架、无追踪脚本；JS 仅用于 Lenis 平滑滚动）。内容是带 frontmatter 的 Markdown，构建时按统一内容模型生成列表与页面。

## 结构

- `src/content/posts/*.md` — 文章（拼音 slug），frontmatter 含 type / stage / planted / tended / topics / summary / direction
- `src/content/directions/*.md` — 方向页（方向宣言 + 时间线 + 归档 + 经验）；`page: false` 表示只有首页卡片、暂无方向页
- `src/content.config.ts` — 内容集合与字段校验（zod schema）
- `src/pages/` — 首页、关于页、posts/directions 的动态路由
- `src/layouts/Base.astro` — 全站基础布局（页眉导航 + 页脚 + Lenis）
- `src/data/works.ts` — 首页「作品选辑」条目
- `public/css/style.css` — 全站唯一样式表
- `public/烟小种降本解决方案.html` — 《他不是在找便宜的烟小种》中引用的交付报告
- `astro.config.mjs` — `base: '/personal-site'`，`build.format: 'file'`（保持迁移前的 URL 不变）

## 内容模型

每条内容统一带：`type`（essay / note / smidgeon / direction）、`stage`（seed 🌱 / budding 🌿 / evergreen 🌳）、`planted`（种下日期）、`tended`（最近浇水日期）、`topics`、`summary`。

## 本地预览

```bash
npm install
npm run dev      # 开发预览（注意 dev 下链接不带 .html，以构建产物为准）
npm run build    # 输出到 dist/，可用任意静态服务器预览；相对链接在 file:// 下也可用
```

## 部署

推送到 `main` 分支即可。GitHub Actions（`.github/workflows/deploy.yml`）会安装依赖、执行 `astro build`，并把 `dist/` 发布到 `gh-pages` 分支，GitHub Pages 从 `gh-pages` 提供访问。
