import { initParallax } from './parallax.js';
import { initGalaxyTrail } from './galaxy-trail.js';
import { initTiltCards } from './tilt.js';
import { initHero3D } from './hero-3d.js';
import { initNebula } from './shader-nebula.js';
import { initPlanet } from './planet.js';
import { attachGA4ProductClicks } from './ga4.js';
import { runFlags } from './feature-flags.js';

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initGalaxyTrail();
  initTiltCards();
  initHero3D();
  initNebula();
  initPlanet();
  attachGA4ProductClicks();
  runFlags();
});
