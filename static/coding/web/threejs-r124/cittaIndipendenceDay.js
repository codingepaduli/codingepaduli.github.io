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
    console.log(gltfModel);

    gltfModel.scale.set(0.25,0.25,0.25);
    gltfModel.position.z = -300;
    gltfModel.rotation.y += 0.5;
    scene.add(gltfModel);

    cars = gltfModel.getObjectByName('Cars');
    myCar = cars.children[18];
    //myCar.add(camera);
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

    if (cars != null) {
        for (const car of cars.children) {
            car.rotation.y += 0.005;

            car.position.y += 1;
        }
    }

    renderer.render( scene, camera );
}

animate();

document.addEventListener('keydown', function(event) {
    var code = event.key;
    console.log(code);

    if (code == "ArrowLeft") pet.position.x += -15; // left
    if (code == "ArrowUp") pet.position.z += -15; // up
    if (code == "ArrowRight") pet.position.x += +15; // right
    if (code == "ArrowDown") pet.position.z += +15; // down

    if (code == "s") pet.rotation.y += +0.05; // s
    if (code == "d") pet.rotation.y += -0.05; // d
});

const fullscreenBtn = document.querySelector("#fullscreen");
const canvas = document.querySelector('#canvas');

fullscreenBtn.addEventListener('click', function(event) {
  canvas.classList.toggle('absolute');
});