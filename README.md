# personal-site

Sebastian Lim 的个人网站：<https://sebastianhayashi.github.io/personal-site/>

纯静态 HTML + 单个 CSS 文件。无构建步骤、无 JavaScript、无追踪脚本。

## 结构

- `index.html` — 首页：短 bio、作品选辑、文章列表、联系/订阅
- `about.html` — 关于页
- `posts/*.html` — 文章（拼音 slug）
- `css/style.css` — 全站唯一样式表
- `烟小种降本解决方案.html` — 《他不是在找便宜的烟小种》中引用的交付报告

## 本地预览

直接用浏览器打开 `index.html` 即可——所有内部链接都是相对路径，`file://` 下可用。

## 部署

推送到 `main` 分支即可。GitHub Actions（`.github/workflows/deploy.yml`）会把仓库根目录发布到 `gh-pages` 分支，GitHub Pages 从 `gh-pages` 提供访问。
