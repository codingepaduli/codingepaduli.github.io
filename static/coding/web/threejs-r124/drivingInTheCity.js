var scene = new THREE.Scene();

// set a camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.x = 30;
camera.position.y = 30;
camera.position.z = 100;

// add a light
const light = new THREE.PointLight(0xFFFFFF, 3);
light.position.x = 0;
light.position.y = 30;
light.position.z = 30;
scene.add(light);

// adds the axis
var axis = new THREE.AxesHelper(50, 0, 0, 0x00ff00);
scene.add(axis);

// adds the helper
const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
scene.add(cameraHelper);

var renderer = new THREE.WebGLRenderer(
  {canvas: document.querySelector("#canvas")}
);
renderer.setSize( renderer.domElement.clientWidth, renderer.domElement.clientHeight );

//document.body.appendChild( renderer.domElement );

// Start coding here

THREE.ImageUtils.crossOrigin="";
let textureLoader = new THREE.TextureLoader();
let img = textureLoader.load("https://i.imgur.com/v35WvfQ.jpg");
let background = textureLoader.load("https://i.imgur.com/X4vco9k.jpg");

scene.background=background;

let gltfLoader = new THREE.GLTFLoader();
gltfLoader.setPath("/static/coding/web/threejs-r124/lib/");
let modelUrl = "scene.gltf";

let gltfModel = null;
let cars = null;
let myCar = null;
gltfLoader.load(modelUrl, (gltf) => {
    gltfModel = gltf.scene;
    scene.add(gltfModel);

    gltfModel.rotation.y += 0.5;

    cars = gltfModel.getObjectByName('Cars');
    myCar = cars.children[18];
    myCar.add(camera);
    console.log(cars);
});

//var material = new THREE.MeshPhongMaterial();
var material = new THREE.MeshBasicMaterial({
        //color: 0xFF8844
        map: img
});

var geometry = new THREE.BoxGeometry( 15, 15, 15 );
var pet = new THREE.Mesh( geometry, material );
pet.position.set(0, 30, -5);

scene.add(pet);

// I can add the camera to the pet, If i want
pet.add(camera);

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}

animate();

document.addEventListener('keydown', function(event) {
    console.log(event.code);
    
    if (myCar != null) {
      switch (event.code) {
        case "KeyS":
          myCar.rotation.y += 0.05;
          break;
        case "KeyD":
          myCar.rotation.y += -0.05;
          break;
        case "ArrowDown":
          myCar.position.x -= 10 *  Math.sin(myCar.rotation.y + 3.14);
          myCar.position.z -= 10 *  Math.cos(myCar.rotation.y + 3.14);
          break;
        case "ArrowUp":
          myCar.position.x += 10 *  Math.sin(myCar.rotation.y + 3.14);
          myCar.position.z += 10 *  Math.cos(myCar.rotation.y + 3.14);
          break;
        case "ArrowLeft":
          myCar.rotation.y += +0.05;
          myCar.position.x += 10 * Math.sin(myCar.rotation.y + 3.14);
          myCar.position.z += 10 * Math.cos(myCar.rotation.y + 3.14);
          break;
        case "ArrowRight":
          myCar.rotation.y += -0.05;
          myCar.position.x += 10 *  Math.sin(myCar.rotation.y + 3.14);
          myCar.position.z += 10 *  Math.cos(myCar.rotation.y + 3.14);
          break;
      }
    }
});

const fullscreenBtn = document.querySelector("#fullscreen");
const canvas = document.querySelector('#canvas');

fullscreenBtn.addEventListener('click', function(event) {
  canvas.classList.toggle('absolute');
});