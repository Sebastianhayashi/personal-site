import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 全站统一的内容模型：每条内容都有类型、生长阶段、种下/浇水日期。
// stage: seed 种子 🌱 / budding 生长中 🌿 / evergreen 常青 🌳
const stageEnum = z.enum(['seed', 'budding', 'evergreen']);

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['essay', 'note', 'smidgeon']).default('essay'),
    stage: stageEnum,
    planted: z.coerce.date(), // 种下（发布）日期
    tended: z.coerce.date().optional(), // 最近浇水（更新）日期
    topics: z.array(z.string()).default([]),
    summary: z.string(), // 一句话简介，用于列表与 meta description
    description: z.string().optional(), // meta description，缺省用 summary
    listTitle: z.string().optional(), // 列表页短标题，缺省用 title
    direction: z.string().optional(), // 所属方向 slug（directions 集合）
    order: z.number().default(99), // 同日期时的排序权重，小在前
  }),
});

const directions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/directions' }),
  schema: z.object({
    title: z.string(),
    type: z.literal('direction').default('direction'),
    stage: stageEnum,
    status: z.enum(['active', 'planned']), // 进行中 / 筹备中
    planted: z.coerce.date(),
    tended: z.coerce.date().optional(),
    topics: z.array(z.string()).default([]),
    summary: z.string(), // 首页卡片一句话
    description: z.string().optional(), // meta description，缺省用 summary
    page: z.boolean().default(true), // false = 只有首页卡片，暂无方向页
    order: z.number().default(99),
  }),
});

export const collections = { posts, directions };
