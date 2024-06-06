// Create shader for gradient texture
function getGradientShaders() {

    const sphereVertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.1);
    }
    `;
    const sphereFragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float time;
    varying vec2 vUv;
    
    float random(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(random(i), random(i + vec2(1.0, 0.0)), u.x),
        mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    
    void main() {
        float n = noise(vUv * 10.0 + time * 0.1);
        vec3 color = mix(color1, color2, vUv.y + n * 0.2);
        gl_FragColor = vec4(color, 1.0);
    }
    `;
    const sphereUniforms = {
        color1: { type: 'vec3', value: new THREE.Color(0xff4800) }, // Start color
        color2: { type: 'vec3', value: new THREE.Color(0xfff8c2) }, // End color
    };
    
    // creates the gradient texture
    const sphereMaterial = new THREE.ShaderMaterial({
        vertexShader: sphereVertexShader,
        fragmentShader: sphereFragmentShader,
        uniforms: sphereUniforms
    });

    return sphereMaterial
};

function getGoldMaterial() {
    const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffa600, // Gold color
        metalness: 1,
        emissive: new THREE.Color(0x030875).multiplyScalar(0.5), 
        emissiveIntensity: 0.5

    });

    return goldMaterial
}