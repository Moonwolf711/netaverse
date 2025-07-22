export function initGalaxyTrail() {
  const trail = document.getElementById('galaxy-trail');
  if (!trail) return;
  document.addEventListener('mousemove', e => {
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
  });
}
