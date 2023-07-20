let x1 = 50;
let y1 = -10;
let d1 = 30;
let distanza;
let punteggio = 0;

function setup() {
  createCanvas(600, 400);
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
      x1 = random(20, 580);
	  y1 = 0;
  }
  
}