// Add pointers
async function displayPointers() {
    const pointers = await getPointers();
    
    pointers.locations.forEach(location => {
        const latitude = location.latitude;
        const longitude = location.longitude;

        addPointer(latitude, longitude);
    });
}

// Get pointers from json file
async function getPointers() {

    const reponses = await fetch(`./data/pointers.json`)
    // const reponses = await fetch('http://babacom.fr/wp-content/uploads/2024/05/pointers.json');
    console.log(reponses);
    return reponses.json()
}

function randomizePointerSize() {
    // return (Math.random() * (0.02 - 0.005) + 0.01).toFixed(4);
    return 0.01
}

// Function to add a pointer based on latitude and longitude
function addPointer(lat, lon) {
    const pointerGeometry = new THREE.SphereGeometry(randomizePointerSize(), 32, 32);
    const pointerMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffcb6a,
        emissive: new THREE.Color(0xffcb6a).multiplyScalar(0.8), 
        emissiveIntensity: 2
    });
    const pointer = new THREE.Mesh(pointerGeometry, pointerMaterial);

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    pointer.DoubleSide = true;

    pointer.position.set(
        -((5 * Math.sin(phi)) * Math.cos(theta)),
        (5 * Math.cos(phi)),
        (5 * Math.sin(phi)) * Math.sin(theta)
    );

    sphere.add(pointer); // Add the pointer as a child of the sphere
}