// Adding a sphere
const sphereMaterial = getGradientShaders();
// const sphereMaterial = getGoldMaterial();

const sphereGeometry = new THREE.SphereGeometry(4.5, 64, 64);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// Initial position and rotation of the sphere
const xSphereRotation = 0.70;
const ySphereRotation = -1.9;
const zSphereRotation = 0.0;
sphere.rotation.set(xSphereRotation, ySphereRotation, zSphereRotation);

scene.add(sphere);

resizeSphere();

// Add event listener to resize the sphere when the window size changes
window.addEventListener('resize', resizeSphere);