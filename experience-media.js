document.addEventListener("DOMContentLoaded", () => {
  const block = document.querySelector(".experience-block");
  const leftCol = document.querySelector(".media-column.left");
  const rightCol = document.querySelector(".media-column.right");

  if (!block || !leftCol || !rightCol) return;

  window.addEventListener("scroll", () => {
    const rect = block.getBoundingClientRect();
    const windowH = window.innerHeight;

    if (rect.top < windowH && rect.bottom > 0) {
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clamped = Math.max(0, Math.min(progress, 1));

      // 左列移动稍慢
      const leftTranslate = clamped * 400; 
      leftCol.style.transform = `translateY(-${leftTranslate}px)`;

      // 右列移动稍快
      const rightTranslate = clamped * 600;
      rightCol.style.transform = `translateY(-${rightTranslate}px)`;
    }
  });
});