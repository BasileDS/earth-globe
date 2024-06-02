// Resize canvas based on window size 
function resizeScene() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

// Function to resize the sphere based on window size
function resizeSphere() {
    
    const width = window.innerWidth;

    if (width < 1080) {
        const scale = 0.75;
        sphere.scale.set(scale, scale, scale);
    }

    if (width >= 1080) {
        const scale = 1;
        sphere.scale.set(scale, scale, scale);
    }
}