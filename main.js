import { loadGLTF } from "./libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;


document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './assets/targets/cannon.mind'
    });
    const { renderer, scene, camera } = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    // const test = await loadGLTF('./assets/models/cannon.glb');
    // test.scene.scale.set(0.1, 0.1, 0.1);
    // test.scene.position.set(0, 0, 0);
    const test = await loadGLTF('./assets/models/scanned_cannon.glb');
    test.scene.scale.set(0.01, 0.01, 0.01);
    test.scene.position.set(0, 0, 0);
    // house.scene.rotation.set(0, -0.2, 0);

    const testAncor = mindarThree.addAnchor(0);
    testAncor.group.add(test.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});