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

// Load the images (cross origin ajax call)
THREE.ImageUtils.crossOrigin="";
let textureLoader = new THREE.TextureLoader();
let img = textureLoader.load("https://i.imgur.com/v35WvfQ.jpg");
let background = textureLoader.load("https://i.imgur.com/X4vco9k.jpg");

// set the background image
scene.background=background;

// create a new material with the image as texture
var headMaterial = new THREE.MeshBasicMaterial({
        //color: 0xFF8844
        map: img
});

// create the geometry with the material for the head
var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var pet = new THREE.Mesh( geometry, headMaterial );
pet.position.set(0, 0, 5);
scene.add(pet);

// create a light reflection material
var material = new THREE.MeshPhongMaterial();
material.color.setHSL(0, 1, .5);  // red
material.flatShading = true;

// create the geometry with the material for the left arm
var geometry2 = new THREE.ConeBufferGeometry(6, 8, 16);
var leftArm = new THREE.Mesh( geometry2, material );
leftArm.position.set(10, -10, 0);
pet.add(leftArm);

// create the geometry with the material for the right arm
var geometry3 = new THREE.DodecahedronBufferGeometry(5);
var rightArm = new THREE.Mesh( geometry3, material );
rightArm.position.set(-10, -10, 0);
pet.add(rightArm);

// create the geometry with the material for the body
const geometry4 = new THREE.TorusBufferGeometry(5, 2, 8, 24);
var body = new THREE.Mesh( geometry4, material );
body.position.set(0, -13, 0);
pet.add(body);

// I can add the camera to the pet, If i want
pet.add(camera);

// create some trees
makeTreeAt( 50, -200);
makeTreeAt(-50, -200);
makeTreeAt( 100, -100);
makeTreeAt(-100, -100);

var animate = function () {
requestAnimationFrame( animate );

// pet.rotation.y += 0.01;

renderer.render( scene, camera );
};

animate();

function makeTreeAt(x, z) {
    var trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(20, 20, 150),
        new THREE.MeshBasicMaterial({color: 0xA0522D})
    );
    var top = new THREE.Mesh(
        new THREE.SphereGeometry(50),
        new THREE.MeshBasicMaterial({color: 0x228B22})
    );
    top.position.y = 75;
    trunk.add(top);

    trunk.position.set(x, 0, z);
    scene.add(trunk);
}

document.addEventListener('keydown', function(event) {
  console.log(event.code);
  switch (event.code) {
    case "ArrowDown":
      pet.position.z += +5; // up
      break;
    case "ArrowUp":
      pet.position.z += -5; // down
      break;
    case "ArrowLeft":
      pet.position.x += -5; // left
      break;
    case "ArrowRight":
      pet.position.x += +5; // right
      break;
  }
});

const fullscreenBtn = document.querySelector("#fullscreen");

fullscreenBtn.addEventListener('click', function(event) {
  if (!document.fullscreenElement) {
    let canvasNode = document.querySelector('#canvas');
    canvasNode.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});