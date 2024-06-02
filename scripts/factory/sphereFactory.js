// add new bloom sphere
function addBloomSphere(color, rad, opa, radInc, opaDec, stp) {
    let radius = rad;
    let opacity = opa;
    const opacityDecrement = opaDec;
    const radiusIncrement = radInc; 

    let bloomSphere = {};

    for (let i = 0; i < stp; i++) {
        // Create sphere geometry
        const geometry = new THREE.SphereGeometry(radius, 128, 128);

        // Create sphere material
        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: opacity
        });

        // Create the mesh
        bloomSphere = new THREE.Mesh(geometry, material);

        // Add the sphere to the scene
        sphere.add(bloomSphere);

        // Update the radius and opacity for the next sphere
        radius += radiusIncrement;
        opacity -= opacityDecrement;
    }

    return bloomSphere
}

async function updateSphereValues() {
    const sphereValues = await getSphereValues();
    sphere.clear();

    displayPointers();

    console.log(sphereValues[5], sphereValues[2], sphereValues[1], sphereValues[2], sphereValues[3], sphereValues[0]);
    addBloomSphere(sphereValues[5], sphereValues[2], sphereValues[1], sphereValues[2], sphereValues[3], sphereValues[0])
}