// Camera setup

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
camera.position.set(0, 0, 9); // Position the camera

window.addEventListener("resize", adjustCamera);

function adjustCamera() {
    const width = window.innerWidth;


    let xOffset = width < 1080 ? width * -0.005 : width * -0.023 ;
    xOffset = xOffset > -35 ? width * -0.023 : -35;
    const yOffset = width < 1080 ? -1 : -15;

    const fullWidth = 100;
    const fullHeight = 100;
    
    const camWidth = 100;
    const camHeight = 100;

    camera.setViewOffset(fullWidth,fullHeight, xOffset, yOffset, camWidth, camHeight);

    camera.updateProjectionMatrix();
}

adjustCamera()