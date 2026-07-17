---
title: AI 驾驭（约束 AI）
type: direction
stage: budding
status: active
planted: 2026-07-17
topics: [AI, 门控]
summary: 让模型只做受限决策：从动漫库到阅读门。
description: 方向记录：我不让 AI 自由发挥，而是让它只做受限的决策——机制优于提示，确定性优于信任。从动漫库到阅读门，这条线还在走。
order: 2
---

我不让 AI 自由发挥，而是让它只做受限的决策——机制优于提示，确定性优于信任。AI 是员工，好管理意味着明确的边界和门控，而不是更客气的 prompt。

这条线记录的是这个原则怎么一步步落到真实项目里：先是观察到问题，然后看着问题显形，最后把约束写进代码和流程。下面的时间线是这条线到目前为止留下的东西。

<section>
  <h2>时间线</h2>
  <ol class="timeline">
    <li class="timeline-item">
      <span class="timeline-date">2026 年 4 月</span>
      <h3 class="timeline-title">早期观察：AI 像急于表现的员工</h3><span class="badge badge-done">完成</span>
      <p>最初的印象来自日常使用：「AI 太快给答案，像急于表现自己的员工。」顺着这个比喻，总结出用好 AI 的两大因素：上下文管理 + 能力边界。后来所有的门控设计，都是从这两个词长出来的。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 6 月初</span>
      <h3 class="timeline-title">问题显形：审核不过来</h3><span class="badge badge-done">完成</span>
      <p>高产期暴露了另一面：「AI 生成太快太多，我审核不过来。」更危险的是重心的滑动——笔记里写「从我指挥它，滑向依赖它」。从这时起我意识到：生成不再稀缺，审核才是瓶颈。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 6 月 20 日</span>
      <h3 class="timeline-title">自研深度研究 prompt</h3><span class="badge badge-done">完成</span>
      <p>写下一个深度研究 prompt：把问题「视为尚未定义」，不接受自我诊断，先找竞争解释和反例。它后来复用了 16 次，成了我方法论的结晶——约束不一定写在代码里，也可以写进提问的方式里。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 6 月</span>
      <h3 class="timeline-title">anime-nfo-agent：LLM 只做选择题</h3><span class="badge badge-done">完成</span>
      <p>原则第一次落成完整系统：LLM 只从候选里做选择并输出严格 JSON，渲染、校验、对账全是确定性代码。500 个文件夹实测。让它做选择题，不让它做问答题。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 6 月 29 日</span>
      <h3 class="timeline-title">「我在管理一家看不见的公司」</h3><span class="badge badge-done">完成</span>
      <p>在笔记里写下：「我在管理一家看不见的公司，员工全是 AI agent。」这个比喻定了这条线的基调——既然是员工，要的就是管理制度：明确的边界、可检查的产出、过不了门就不放行。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 7 月 10 日</span>
      <h3 class="timeline-title">jellyfin-anime-curator：安全门控的策展树</h3><span class="badge badge-done">完成</span>
      <p>只读扫描混乱的动漫归档，先生成一棵可 review 的策展树，过了安全门才物化。两条铁律：绝不写源文件，绝不自动发布不确定匹配。人留在决策环里，AI 只提供候选。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">2026 年 7 月 16 日</span>
      <h3 class="timeline-title">teach skill 阅读门：拜托不如门</h3><span class="badge badge-done">完成</span>
      <p>发现多个模型用 teach skill 时会偷懒——书没读完就开始教。于是把「请认真读完」变成「过不了门不许教」：全书阅读门、校验脚本，约束写进流程。这条与<a href="ai-learning-growth.html">用 AI 促进学习与个人成长</a>交叉，完整过程记在那个方向页。</p>
    </li>
    <li class="timeline-item">
      <span class="timeline-date">现在</span>
      <h3 class="timeline-title">这条线还在继续</h3><span class="badge badge-active">进行中</span>
      <p>门控的思路还在往更多项目里渗：凡是 AI 经手的地方，都先问一句——它的边界在哪，门设在哪。有新的进展，会先记在这里。</p>
    </li>
  </ol>
</section>

<section>
  <h2>归档：这件事留下了什么</h2>
  <ul class="archive-list">
    <li>
      <span class="archive-name">jellyfin-anime-curator</span>
      <p>安全门控的 Jellyfin 策展树：只读扫描 → 可 review → 安全门后物化，绝不写源文件。已公开：<a href="https://github.com/Sebastianhayashi/jellyfin-anime-curator" target="_blank" rel="noopener noreferrer">github.com/Sebastianhayashi/jellyfin-anime-curator</a>。</p>
    </li>
    <li>
      <span class="archive-name">anime-nfo-agent</span>
      <p>LLM 只做受限决策的 NFO 出版管道：从候选里选并输出严格 JSON，500 个文件夹实测。仓库暂为私有，脱敏后再公开；案例长文筹备中。</p>
    </li>
    <li>
      <span class="archive-name">teachbox</span>
      <p>「约束 AI」理念的产品形态：私有学习空间，AI 教师在明确边界内出课、对话、追踪进度。脱敏后的未完成探索快照已公开：<a href="https://github.com/Sebastianhayashi/teachbox" target="_blank" rel="noopener noreferrer">github.com/Sebastianhayashi/teachbox</a>。</p>
    </li>
    <li>
      <span class="archive-name">自研深度研究 prompt</span>
      <p>复用 16 次的方法论结晶：把问题视为尚未定义，先找竞争解释和反例。远期分享全文。</p>
    </li>
    <li>
      <span class="archive-name">Jellyfin 取证方法论</span>
      <p>动漫库策展线的数据库诊断/取证脚本组。脱敏后远期写成方法论文章——只讲方法，不含任何库信息。</p>
    </li>
  </ul>
</section>

<section>
  <h2>我学到的</h2>
  <ol class="lesson-list">
    <li><strong>机制优于提示。</strong>门 &gt; 拜托：把约束写进流程和代码，比写进 prompt 管用。模型会偷懒，流程不会。</li>
    <li><strong>让 AI 做选择题，不让它做问答题。</strong>从候选里选、输出严格 JSON，剩下的渲染、校验、对账全交给确定性代码。AI 的决策面越小，系统越可靠。</li>
    <li><strong>生成不再稀缺，审核才是瓶颈。</strong>当 AI 生成得又快又多，卡住的是我的判断力。设计系统时先想「我审得过来吗」，再想「它做得多快」。</li>
    <li><strong>从指挥到依赖只有一步，门控也是自救。</strong>重心滑动是悄悄发生的。把人留在决策环里，不只是为了产出质量，也是为了不把自己的判断力外包出去。</li>
  </ol>
</section>

<section>
  <p><a href="../index.html">← 返回首页</a></p>
  <p class="muted">这个方向的记录会持续更新——新的进展、新的教训，都会先写在这里。</p>
</section>
