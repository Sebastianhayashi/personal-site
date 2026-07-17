// 作品选辑：首页「想做的事往前走时，掉下来的副产品」。
// desc / status 允许内联 HTML（署名链接），渲染时用 set:html 输出。
export interface Work {
  name: string;
  nameLink?: string; // 有则名称渲染为外链
  desc: string;
  status: string;
  stage: 'seed' | 'budding' | 'evergreen';
}

export const works: Work[] = [
  {
    name: 'teachbox',
    desc: '私有学习空间：上传教材，AI 教师出课并追踪进度。',
    status: '<a href="https://github.com/Sebastianhayashi/teachbox">GitHub（未完成探索快照）</a>',
    stage: 'seed',
  },
  {
    name: 'jellyfin-anime-curator',
    nameLink: 'https://github.com/Sebastianhayashi/jellyfin-anime-curator',
    desc: '混乱动漫归档 → 安全门控的 Jellyfin 策展树。',
    status: '<a href="https://github.com/Sebastianhayashi/jellyfin-anime-curator" target="_blank" rel="noopener noreferrer">GitHub</a>',
    stage: 'budding',
  },
  {
    name: 'anime-nfo-agent',
    desc: 'LLM 只做受限决策的 NFO 出版管道，500 个文件夹实测。',
    status: '案例长文筹备中',
    stage: 'budding',
  },
  {
    name: 'Show Your Work 蒸馏系列',
    desc: '用 cangjie-skill × teach 工具链把一本书变成 15 个可执行技能。工具链上游：<a href="https://github.com/kangarooking/cangjie-skill" target="_blank" rel="noopener noreferrer">cangjie-skill</a>（作者 kangarooking）、<a href="https://github.com/mattpocock/skills" target="_blank" rel="noopener noreferrer">teach</a>（作者 Matt Pocock）。',
    status: '案例长文筹备中',
    stage: 'evergreen',
  },
  {
    name: 'konstone-archive',
    desc: '今敏官网全站文章的归档与索引。',
    status: '案例长文筹备中',
    stage: 'budding',
  },
];
