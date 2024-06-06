// Renderer setup
const renderer = new THREE.WebGLRenderer( {
	antialias: true,
	alpha: true
});

const firstSection = document.querySelector(".fst-div");
firstSection.appendChild(renderer.domElement);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0";
renderer.domElement.style.right = "0";


// Update renderer size and camera aspect ratio on window resize
window.addEventListener('resize', resizeScene);

addBloomSphere("#000000", 4.8, 0.3, 0, 0, 1);
addBloomSphere("#ff8f00", 4.8, 0.02, 0.05, 0.001, 100);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    console.log(window.innerHeight)
    sphere.rotation.y -= 0.00015;
    renderer.render(scene, camera); 
}

displayPointers();

resizeScene();

animate();