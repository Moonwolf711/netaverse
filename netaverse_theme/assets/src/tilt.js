export function initTiltCards() {
  const cards = document.querySelectorAll('.card-tilt');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform =
        `rotateX(${-(y - rect.height / 2) / 10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
