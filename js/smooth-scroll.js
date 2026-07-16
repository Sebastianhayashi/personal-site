/*
 * Smooth scroll — 阻尼感滚动
 * 基于 Lenis (MIT License) https://github.com/darkroomengineering/lenis
 * 本地 vendored: js/lenis.min.js (v1.3.4)
 */
(function () {
  // 尊重系统的"减弱动态效果"设置：保持原生滚动
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof Lenis === 'undefined') return;

  var lenis = new Lenis({
    lerp: 0.09,        // 阻尼强度：越小越"沉"，0.09 接近 openai.com 的手感
    smoothWheel: true, // 滚轮平滑
    syncTouch: false   // 触屏保持原生手感（避免手机上发飘）
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 页内锚点跳转也走同一阻尼
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      lenis.scrollTo(id);
    }
  });
})();
