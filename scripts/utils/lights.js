// Lighting setup

// Soft white light
const ambientLight = new THREE.AmbientLight(0xffec4b, 0); 

// White directional light
const directionalLight = new THREE.DirectionalLight(0xffd700, 10);
directionalLight.position.set(-50, 50, 50);

scene.add(directionalLight);
scene.add(ambientLight);