---
title: 用 AI 促进学习与个人成长
type: direction
stage: budding
status: active
planted: 2026-07-17
topics: [AI, 学习]
summary: 从拆书到私教产品：一条还在走的线。
description: 方向记录：从教育网站、12 个拆书工作区，到 teachbox 的搁置与 Kimi Study 的重定义——用 AI 放大个人的学习与成长，这条线还在走。
order: 1
---

「学习」和「个人成长」在我这里是两件事。学习是面向学生的——有教材、有考试、有既定的路径；个人成长是面向成人的——没有课表，问题自己提，教材自己选。这个方向探索的是同一件事的两侧：用 AI 放大个人的学习与成长。

重点扣在这件事本身，而不是某个单一产品上。产品形态一直在变，问题没变过：怎么让 AI 真的帮人学会一样东西，而不只是答对一道题。下面的时间线记录这条线到目前为止走过的弯路、转向和留下来的东西。

<section>
  <h2>时间线</h2>
  <ol class="timeline">
    <li class="timeline-item">
      <span class="timeline-date">2026 年 4 月底 – 5 月中</span>
      <h3 class="timeline-title">教育网站与做题产品</h3><span class="badge badge-done">完成</span>
      <p>这条线最早的形态：一个教育网站，外加围绕做题的产品尝试——题库、批改、给具体学科做的练习工具。东西做出来了，也让我第一次摸到「用 AI 组织知识」的手感。回头看它们更像热身：当时想的是「给学生用」，还没碰到真正的问题——人到底是怎么学会一样东西的。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 5 月 – 7 月</span>
      <h3 class="timeline-title">cangjie × teach：给自己开了 12 门课</h3><span class="badge badge-done">完成</span>
      <p>把两个开源 skill 组合成一条流水线：<a href="https://github.com/kangarooking/cangjie-skill" target="_blank" rel="noopener noreferrer">cangjie-skill</a>（作者 kangarooking）负责把一本书蒸馏成结构化知识，<a href="https://github.com/mattpocock/skills" target="_blank" rel="noopener noreferrer">teach skill</a>（作者 Matt Pocock）负责把它组织成有状态的教学工作区。用这套组合拳，我给自己开了 12 门课，每本书一个工作区。这条流水线后来成了我所有「用 AI 学习」实验的底座。</p>
    </li>
    <li class="timeline-item is-paused">
      <span class="timeline-date">2026 年 7 月 13 日</span>
      <h3 class="timeline-title">teachbox：把教学工作区做成私有学习产品</h3><span class="badge badge-paused">搁置</span>
      <p>想把 teach 的工作区从命令行搬进一个真正的 Web 产品：上传教材，AI 教师出课、追踪进度，一个人管理多个学习空间。</p>
      <p>教训也在这里。听说当时刚发布的 OpenAI 新模型很强，我把整个实现全权委托给了它——需求没对齐，过程没验收。额度耗尽时产品还没做完，拿到的成品和我想要的东西对不上。这不是模型的问题，是委托边界的问题：我把「交出去」当成了「不用管」。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 7 月 13 日之后</span>
      <h3 class="timeline-title">反思：问题被我复杂化了</h3><span class="badge badge-pivot">转向</span>
      <p>冷静下来后意识到，我并不需要从零写一整套前端——Kimi Code 自带 Web 前端，在它基础上改，减掉不需要的、加上要的功能，比重写快得多也稳得多。先问「已有的能不能改」，再决定要不要造新的。顺序一错，工作量翻好几倍。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 7 月 14 日</span>
      <h3 class="timeline-title">Kimi Study：从「写前端」到「学习体验本身」</h3><span class="badge badge-pivot">转向</span>
      <p>方向被重新定义：问题不再是「前端怎么写」，而是「学习体验本身该是什么样」——一个学生打开它的前 30 秒看到什么？教育线有了新名字：教育网站 → teachbox → Kimi Study。前端做成什么样，等那个悬着的问题有了答案再定。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 7 月 16 日</span>
      <h3 class="timeline-title">teach skill 升级：加一道「阅读门」</h3><span class="badge badge-done">完成</span>
      <p>发现多个模型用 teach skill 时会偷懒——书没读完就开始教。于是把 cangjie 等 skill 的纪律移植过来：全书阅读门、课程蓝图、备课简报、校验脚本。过不了阅读门，就不许开课。</p>
      <p>我用升级版把《Show Your Work!》拆成了一门完整的课，全书 22 个区块 100% 覆盖——这门课就是新纪律跑通的实证。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">现在</span>
      <h3 class="timeline-title">这条线还在继续</h3><span class="badge badge-active">进行中</span>
      <p>悬而未决的核心问题还是那个：初学者真正缺的是前端，还是缺一个好的方法论和指导？在这个问题有答案之前，产品形态不会定。有新的进展，会先记在这里。</p>
    </li>
  </ol>
</section>

<section>
  <h2>归档：这件事留下了什么</h2>
  <ul class="archive-list">
    <li>
      <span class="archive-name">teachbox 的设计遗产</span>
      <p>产品搁置了，但它的 PRODUCT.md 和基于 OKLCH 色彩空间的设计系统（品牌人格、反参照）完成度很高，是可以直接复用的设计遗产。半成品快照已公开：<a href="https://github.com/Sebastianhayashi/teachbox" target="_blank" rel="noopener noreferrer">github.com/Sebastianhayashi/teachbox</a>；完整的复盘长文筹备中。</p>
    </li>
    <li>
      <span class="archive-name">teach skill（我的定制升级版）</span>
      <p>在开源原版基础上加入阅读门、蓝图、校验脚本等纪律。上游：<a href="https://github.com/mattpocock/skills" target="_blank" rel="noopener noreferrer">mattpocock/skills</a>（作者 Matt Pocock）；升级版暂未公开。</p>
    </li>
    <li>
      <span class="archive-name">cangjie-skill</span>
      <p>流水线的理解层，负责把书蒸馏成结构化知识。非本人作品，上游：<a href="https://github.com/kangarooking/cangjie-skill" target="_blank" rel="noopener noreferrer">kangarooking/cangjie-skill</a>（作者 kangarooking）。</p>
    </li>
    <li>
      <span class="archive-name">12 个拆书工作区</span>
      <p>12 本书 × 12 个有状态的教学工作区。它们既是这条流水线跑通过的证据，也是我持续沉淀技能资产的库。</p>
    </li>
    <li>
      <span class="archive-name">本站相关文章</span>
      <p><a href="../posts/ai-you-hen-da-de-yong-ma.html">AI 有很大的用吗</a>、<a href="../posts/ai-ge-ming-de-zhu-jue-yi-zhi-shi-ge-ren.html">AI 革命的主角一直是个人</a>、<a href="../posts/yan-xiao-zhong-jiang-ben-jie-jue-fang-an.html">他不是在找便宜的烟小种</a>——这三篇都是这条线上的思考产物。</p>
    </li>
  </ul>
</section>

<section>
  <h2>我学到的</h2>
  <ol class="lesson-list">
    <li><strong>新模型发布就全权委托 = 失控。</strong>听说厉害就整包交出，需求没对齐、过程没验收，结果就不可控。委托可以，放手不行。</li>
    <li><strong>先问「已有的能不能改」，再造轮子。</strong>手头的工具自带可改的前端，我却先写了整套新的——问题常常是被自己复杂化的。</li>
    <li><strong>模型会偷懒，用机制而不是信任。</strong>把「请认真读书」变成「过不了阅读门就不许教」——约束写进流程，比写进 prompt 管用。</li>
    <li><strong>失望的项目也是资产。</strong>teachbox 没做完，但它的产品文档和设计系统完成度很高。搁置不等于白做。</li>
  </ol>
</section>

<section>
  <p><a href="../index.html">← 返回首页</a></p>
  <p class="muted">这个方向的记录会持续更新——新的进展、新的教训，都会先写在这里。</p>
</section>
