import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianhayashi.github.io',
  base: '/personal-site',
  // 'file' 让每个页面输出为独立 .html，保持迁移前的 URL 完全不变，
  // 也让相对链接（./ ../）在 file:// 下继续可用。
  build: { format: 'file' },
});
