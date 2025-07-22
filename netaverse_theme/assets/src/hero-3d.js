import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';
import { initNebula } from './shader-nebula.js';
import { initPlanet } from './planet.js';

export function initHero3D() {
  const container = document.getElementById('hero-3d');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const { vertex, fragment } = initNebula();
  const geometry = new THREE.SphereGeometry(50, 32, 32);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  initPlanet(scene);

  camera.position.z = 100;

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();
}
