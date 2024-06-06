let isDragging = false;
let isMouseUp = true; // Flag to track mouseup event
let mouse = { x: 0, y: 0 };
let previousMousePosition = { x: 0, y: 0 };
let velocity = { x: 0, y: 0 };
let inertia = 0.95; // This determines how quickly the velocity decreases
let speed = 0.1;
let originalRotation = { x: 0, y: 0 }; // Store the original rotation
const threshold = 0.01; // Velocity threshold to start returning to the original position
const returnSpeed = 0.05; // Speed at which the object returns to its original position

// Save the initial rotation of the object
originalRotation.x = sphere.rotation.x;
originalRotation.y = sphere.rotation.y;

function onMouseMove(event, object) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Calculate the difference in mouse movement
    const deltaX = mouse.x - previousMousePosition.x;
    const deltaY = mouse.y - previousMousePosition.y;

    // Update velocity based on mouse movement
    velocity.x = deltaX * Math.PI * speed / 2;
    velocity.y = deltaY * Math.PI * -speed / 3;

    // Apply the velocity to the rotation
    object.rotation.x += velocity.y;
    object.rotation.y += velocity.x;

    // If dragging, apply the velocity directly
    if (isDragging) {
        object.rotation.x += velocity.y * 10; // Rotate faster when dragging
        object.rotation.y += velocity.x * 10; // Rotate faster when dragging
    }

    // Update previous mouse position
    previousMousePosition = { x: mouse.x, y: mouse.y };
}

function applyInertia(object) {
    if (!isDragging && isMouseUp) { // Only return to original position if mouse is up
        // Gradually decrease the velocity
        velocity.x *= inertia;
        velocity.y *= inertia;

        // Check if the velocity is below the threshold to start returning to the original position
        if (Math.abs(velocity.x) < threshold && Math.abs(velocity.y) < threshold) {
            // Interpolate rotation back to the original rotation
            object.rotation.x += (originalRotation.x - object.rotation.x) * returnSpeed;
            object.rotation.y += (originalRotation.y - object.rotation.y) * returnSpeed;

            // If the object has returned to its original position, cancel the animation frame
            if (Math.abs(originalRotation.x - object.rotation.x) < threshold && Math.abs(originalRotation.y - object.rotation.y) < threshold) {
                return; // Stop the animation frame
            }
        }
    }

    // Continue the animation loop
    requestAnimationFrame(() => applyInertia(object));
}


window.addEventListener('mousedown', () => {
    isDragging = true;
    isMouseUp = false; // Set to false when mouse is down
    applyInertia(sphere);
}, false);

window.addEventListener('mouseup', () => {
    isDragging = false;
    isMouseUp = true; // Set to true when mouse is up
}, false);

window.addEventListener('mouseleave', () => {
    isMouseUp = true; // Set to true when mouse leaves the window
    applyInertia(sphere);
}, false);

window.addEventListener('mouseout', () => {
    isMouseUp = true; // Set to true when mouse leaves the window
    applyInertia(sphere);
}, false);

  
window.addEventListener('mousemove', (e) => onMouseMove(e, sphere));