import * as THREE from 'three';
import esfera from './esfera';
import fontes from './fontes';

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

function getShaderCode(objeto){

  let code = "";

  let vec3 = (vetor) => `vec3(${vetor[0]},${vetor[1]},${vetor[2]})`;

  let triangulo = (objeto) => `Triangulo(${vec3(objeto.p1)}, ${vec3(objeto.p2)}, ${vec3(objeto.p3)})`

  if(objeto.fronteira){

    const esfera = objeto.fronteira;

    code = code.concat(`if(colisao(Esfera( ${vec3(esfera.centro)} , ${esfera.raio}), p0, dr).z != 3857.0){
    `);
  }

  if(objeto.componentes){

    for(const componente of objeto.componentes){
      code = code.concat("  " + getShaderCode(componente));
    }

  }
  else{
    code = code.concat(`ponto = maisProximo(ponto, colisao(${triangulo(objeto)},p0,dr));
  `);
  }

  if(objeto.fronteira)
      code = code.concat(`
      }
  `);

  return code;
}

console.log(getShaderCode({componentes:[
                                        {componentes:[{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},{componentes:[{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]}], fronteira:{centro:[0,1,2], raio:2}},{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]}], 
                                         fronteira:{centro:[0,1,2], raio:2}}, 
                                         {p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},
                                        {componentes:[{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]},{p1:[0,1,2],p2:[0,1,2],p3:[0,1,2]}],
                                         fronteira:{centro:[0,1,1], raio:1}}
                                      ]
}))

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

  //Cálculo de interseção da esfera
  ${esfera}

  //Cálculo da luz
  ${fontes}

  vec3 shootRaio(vec3 pos){
    return pos - vec3(0,0,1);
  }

  void main() {
    // Calculate color based on position

    vec3 raio = shootRaio(vPosition);

    Esfera esfera = Esfera(vec3(0,0,-2), 1.5);

    Ponto ponto = colisao(esfera, vPosition, raio);

    ponto = maisProximo(colisao(Esfera(vec3(0,-1,-3), 2.5), vPosition, raio), ponto);

    vec3 cor = luz(ponto,raio);

    // cor = cor + colisao(Esfera(vec3(-3,-3,-4), 1.5), vPosition, raio);

    // cor = cor + colisao(Esfera(vec3(-3,0,-4), 2.0), vPosition, raio);
    
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
