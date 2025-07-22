export function initParallax() {
  const elems = document.querySelectorAll('[data-parallax]');
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    elems.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      el.style.transform = `translateY(${scroll * speed}px)`;
    });
  });
}
