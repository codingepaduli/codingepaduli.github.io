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

let scaleXY = 1;

let canvas;
function setup() {
   canvas = createCanvas(600, 400);
   angleMode(DEGREES);

   canvas.parent('sistema');

   console.info(`initial canvas size: ${width} ${height} scale: ${scaleXY}`);
}

function draw() {
    background(0, 0,0);

    scale(scaleXY);

    // disegno il Sole
    fill(255,255,0);
    circle(xSole, ySole, diametroSole);

    // disegno la Terra
    xTerra = xSole + distanzaTerra * cos(angoloTerra);
    yTerra = ySole + distanzaTerra * sin(angoloTerra);

    fill(0,0,255);
    circle(xTerra, yTerra, diametroTerra);

    // disegno Venere
    xVenere = xSole + distanzaVenere * cos(angoloVenere);
    yVenere = ySole + distanzaVenere * sin(angoloVenere);
    
    fill(0,255,45);
    circle(xVenere, yVenere, diametroVenere);
    
    // rotazione angolare
    angoloTerra = angoloTerra + 1;
    angoloVenere = angoloVenere - 2;

    drawFullScreenRect();
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    if (!document.fullscreenElement) {
      let canvasNode = document.querySelector('#sistema canvas');
      canvasNode.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

function drawFullScreenRect() {
  // fullscreen rectangle
  push();

  textSize(10);

  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);

  rectMode(CORNER);
  rect(width - 60, height - 60, 30, 30);

  pop();
}

function windowResized () {
  // windowWidth : windowHeight = 600 : 400
  let scaleX = windowWidth * 0.8 / 600;
  let scaleY = windowHeight * 0.8 / 400;

  scaleXY = min(scaleX, scaleY)

  resizeCanvas (600 * scaleXY, 400 * scaleXY);

  console.info(`resize: ${600 * scaleXY} ${400 * scaleXY} scale: ${scaleXY}`);
  console.info(`canvas size: ${width} ${height} scale: ${scaleXY}`);
  console.info(`windowsize: ${windowWidth} ${windowHeight} scale: ${scaleXY}`);
}
