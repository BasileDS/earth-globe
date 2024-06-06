// Scene setup
const scene = new THREE.Scene();

scene.background = null; // Make the background transparent

// Resize canvas based on window size 
function resizeScene() {

    const width = window.innerWidth;
    const height = window.innerHeight;
    // const width = 1080;
    // const height = 1080;

    renderer.setSize(width, height);
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

