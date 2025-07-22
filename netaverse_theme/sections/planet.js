import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.154/examples/jsm/loaders/GLTFLoader.js';

export async function loadPlanet(scene, url) {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  scene.add(gltf.scene);
}
