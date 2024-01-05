let xSole = 300;
let ySole = 200;
let diametroSole = 80;

let xTerra = 0;
let yTerra = 0;
let distanzaTerra = 100;
let diametroTerra = 25;
let angoloTerra = 0;

let xVenere = 0;
let yVenere = 0;
let distanzaVenere = 60;
let diametroVenere = 20;
let angoloVenere = 15;

let canvas;
function setup() {
   canvas = createCanvas(600, 400);
   angleMode(DEGREES);

   canvas.parent('sistema');
}

function draw() {
    background(0, 0,0);

    fill(255,255,0);
    circle(xSole, ySole, diametroSole);

    xTerra = xSole + distanzaTerra * cos(angoloTerra);
    yTerra = ySole + distanzaTerra * sin(angoloTerra);

    fill(0,0,255);
    circle(xTerra, yTerra, diametroTerra);

    angoloTerra = angoloTerra + 1;

    xVenere = xSole + distanzaVenere * cos(angoloVenere);
    yVenere = ySole + distanzaVenere * sin(angoloVenere);

    fill(0,255,45);
    circle(xVenere, yVenere, diametroVenere);

    angoloVenere = angoloVenere + 2;

    drawFullScreenRect();
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    if (!document.fullscreenElement) {
      let canvasNode = document.querySelector('#sistema canvas');
      canvasNode.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function drawFullScreenRect() {
  // fullscreen rectangle
  push();

  textSize(10);
  //text(" " + mouseX + " " + mouseY, width - 100, height - 70);

  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);

  rectMode(CORNER);
  square(530, height - 60, 30);
  pop();
}
