// Mouse movement handling
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

document.addEventListener('mousedown', () => { isDragging = true; }, false);
document.addEventListener('mouseup', () => { isDragging = false; }, false);
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        rotateSphere(1500, 5000, true, true, e);
    } else {
        rotateSphere(50000, 50000, true, true, e);
    }
}, false);

// Function to rotate the sphere based on mouse actions
function rotateSphere(speedX, speedY, activateX, activateY, e) {
    const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
    };
    const rotateAngleX = (deltaMove.x * Math.PI) / speedX;
    const rotateAngleY = (deltaMove.y * Math.PI) / speedY;
    if (activateX) {
        sphere.rotation.x += rotateAngleY;
    }
    if (activateY) {
        sphere.rotation.y += rotateAngleX;
    }
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
}