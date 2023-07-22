import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a full-screen quad geometry
const fullscreenQuadGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -1, 1,   // top left
    -1, -1,  // bottom left
    1, 1,    // top right
    1, -1,   // bottom right
    1, 1,    // top right
    -1, -1,  // bottom left
  ]);
fullscreenQuadGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 2));

// Define the vertex shader as a string
const vertexShaderCode = `
  varying vec3 vPosition; // Varying attribute to pass position data to fragment shader

  void main() {
    vPosition = position; // Assign the position to the varying attribute
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Define the fragment shader as a string
const fragmentShaderCode = `
  varying vec3 vPosition; // Receive position data from the vertex shader

  vec3 shootRaio(vec3 pos){
    return pos - vec3(0,0,1);
  }

  vec3 intersecaoRaio(float a, float b, float c, vec3 p0, vec3 dr){
    
    float delta = b*b - 4.0*a*c;
    
    // //Raiz imaginária
    if (delta < 0.0) return vec3(0,0,3857);

    delta = sqrt(delta);
    
    float t1 = (-b-delta)/(2.0*a);
    
    float t2 = (-b+delta)/(2.0*a);

    // Pega a menor raiz positiva 
    // float t = (t1 < t2)? 
                            // (t1 > 0)? t1 : t2 :
                            // (t2 > 0)? t2 : t1;

    float t = t1;

    if(t < t2){
        if(t1 < 0.0){
            t = t2;
        }
    }
    else{
        t = t2;
        if(t2 < 0.0){
            t = t1;
        }
    }
    //Se não existir raiz positiva
    if(t < 0.0) return vec3(0,0,3867);

    return p0 + dr*t;
  }

  struct Fonte{
    vec3 If;
    vec3 posicao;
  };

  vec3 especular(vec3 n, vec3 l, vec3 v){

    vec3 If = vec3(0.5,0,0.7);

    vec3 r = normalize(n * (2.0 *  dot(l,n)) - l);

    float fe = dot(v,r);

    if(fe < 0.0) return vec3(0,0,0);

    return If * fe;
  }

  vec3 luz(vec3 ponto, vec3 normal, vec3 dr){

    vec3 If = vec3(0.5,0.6,0.7);

    // vec3 Kd = vec3(0.5,0.6,0.7);

    vec3 posicao = vec3(9,9,0.7);

    vec3 n = normalize(normal);
    
    vec3 l = normalize(ponto - posicao);

    if(dot(l,n) > 0.0) return vec3(0,0,0);

    return If*(-dot(l,n)) + especular(n,l,dr);
  }

  struct Esfera{
    vec3 centro;
    float raio;
  };

  vec3 colisao(Esfera esfera, vec3 p0, vec3 dr){

    float raio = esfera.raio;
    vec3 centro = esfera.centro;

    vec3 w = p0 - centro;
    
    float a = dot(dr,dr);
    float b = dot(w,dr) * 2.0;
    float c = dot(w,w) - raio*raio;

    vec3 ponto  = intersecaoRaio(a,b,c,p0,dr);
    vec3 normal = ponto - centro;

    if(ponto.z == 3857.0) return vec3(0,0,0);

    return luz(ponto, normal, dr);
  }

  void main() {
    // Calculate color based on position

    vec3 raio = shootRaio(vPosition);

    Esfera esfera = Esfera(vec3(0,0,-4), 1.5);

    vec3 cor = colisao(esfera, vPosition, raio);

    cor = cor + colisao(Esfera(vec3(-3,-3,-4), 1.5), vPosition, raio);

    cor = cor + colisao(Esfera(vec3(-3,0,-4), 2.0), vPosition, raio);
    
    gl_FragColor = vec4(cor, 1.0);
  }
`;

// Create a custom material using the shaders
const customMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShaderCode,
  fragmentShader: fragmentShaderCode,
});

// Create a mesh using the full-screen quad geometry and custom material
const fullscreenQuadMesh = new THREE.Mesh(fullscreenQuadGeometry, customMaterial);
scene.add(fullscreenQuadMesh);

// Position the camera to see the full-screen quad
camera.position.z = 1;

// Function to handle window resizing
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

// Function to render the scene
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
