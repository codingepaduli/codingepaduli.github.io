let x1 = 50;
let y1 = -10;
let d1 = 30;
let distanza;
let punteggio = 0;

function setup() {
  let canvasNode = document.querySelector('#acchiappapalline');
  let cw = canvasNode.parentNode.clientWidth;
  createCanvas(cw * 0.9, cw * 0.4).parent('acchiappapalline');
}

function draw() {
  background(220);
  
  textSize(16);
  fill('red');
  text("punteggio " + punteggio, 500, 20);

  // se la pallina raggiunge il fondo dell'area da disegno
  // la riporto su, altrimenti continua a scendere di 10
  if (y1 > 400) {
	  y1=0;
  } else {
	  y1 = y1+5;
  }
  
  circle(x1, y1, d1);
  rect(mouseX, 370, 50, 20);
  
  distanza = dist(x1, y1, mouseX + 25, 370);
  
  // la pallina tocca il rettangolo
  if (distanza < 35) {
	  punteggio = punteggio + 1;

	  // riporto la pallina su in posizione casuale
    x1 = random(20, width - 20);
	  y1 = 0;
  }
  
  drawFullScreenRect();
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    if (!document.fullscreenElement) {
      let canvasNode = document.querySelector('#acchiappapalline canvas');
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
  square(width - 60, height - 60, 30);
  pop();
}
