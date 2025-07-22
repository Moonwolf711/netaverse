import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.154/examples/jsm/loaders/GLTFLoader.js';

export async function initPlanet(scene) {
  const loader = new GLTFLoader();
  try {
    const gltf = await loader.loadAsync('/planet.glb');
    scene.add(gltf.scene);
  } catch (e) {
    console.error(e);
  }
}
