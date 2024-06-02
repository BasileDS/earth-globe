// Renderer setup
const renderer = new THREE.WebGLRenderer( {
	antialias: true,
	alpha: true
});

const firstSection = document.querySelector(".fst-div");
firstSection.appendChild(renderer.domElement);

// Update renderer size and camera aspect ratio on window resize
window.addEventListener('resize', resizeScene);

addBloomSphere("#000000", 4.8, 0.8, 0, 0, 1);
addBloomSphere("#ff8f00", 4.8, 0.02, 0.05, 0.001, 100);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.00015;
    renderer.render(scene, camera); 
}

displayPointers();

resizeScene();

animate();