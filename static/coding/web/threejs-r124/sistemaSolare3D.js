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

const ambientLight = new THREE.AmbientLight( 0x404040, 0.6 );
scene.add( ambientLight );

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

class Stella {
  constructor(n, x, y) {
      this.nome = n;
      this.x = x;
      this.y = y;
      this.pianeta = null;
  }

  ruota(tempo) {
      if (this.pianeta != null) {
          this.pianeta.x = this.x + Math.cos(tempo) * this.pianeta.distanza;
          this.pianeta.y = this.y + Math.sin(tempo) * this.pianeta.distanza;

          this.pianeta.ruota(tempo);
      }
  }
}

class Pianeta {
  constructor(n, d) {
      this.nome = n;
      this.distanza = d;
      this.luna = null;
      this.x = 0;
      this.y = 0;
  }

  ruota(tempo) {
      if (this.luna != null) {
          this.luna.x = this.x + Math.cos(6*tempo) * this.luna.distanza;
          this.luna.y = this.y + Math.sin(6*tempo) * this.luna.distanza;
      }
  }
}

class Luna {
  constructor(n, d) {
      this.nome = n;
      this.distanza = d;
      this.x = 0;
      this.y = 0;
  }
}

let stella = new Stella("Sole", 0, 0);
let terra = new Pianeta("Terra", 45);
let luna = new Luna("Luna", 6);

stella.pianeta = terra;
terra.luna = luna;

// create the geometry with the material for the head
var sunMaterial = new THREE.MeshPhongMaterial({color: 0xff7700});
var sunGeometry = new THREE.SphereGeometry( 20, 10, 10 );
var stellaSphere = new THREE.Mesh( sunGeometry, sunMaterial );

var earthMaterial = new THREE.MeshPhongMaterial({color: 0x1111ff});
var earthGeometry = new THREE.SphereGeometry( 5, 10, 10 );
var terraSphere = new THREE.Mesh( earthGeometry, earthMaterial );

var moonMaterial = new THREE.MeshPhongMaterial({color: 0x887788});
var moonGeometry = new THREE.SphereGeometry( 1, 10, 10 );
var lunaSphere = new THREE.Mesh( moonGeometry, moonMaterial );

stellaSphere.position.set(stella.x, 0, stella.y);
scene.add(stellaSphere);

terraSphere.position.set(terra.x, 0, terra.y);
scene.add(terraSphere);

lunaSphere.position.set(luna.x, 0, luna.y);
scene.add(lunaSphere);

let alpha = 0;

var animate = function () {
    requestAnimationFrame( animate );

    alpha += 0.01;
    stella.ruota(alpha);

    stellaSphere.position.set(stella.x, 0, stella.y);
    terraSphere.position.set(terra.x, 0, terra.y);
    lunaSphere.position.set(luna.x, 0, luna.y);

    renderer.render( scene, camera );
};

animate();
