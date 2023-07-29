let canvas;
function setup() {
  canvas = createCanvas(200, 200);
  canvas.parent('astronave');
}

function draw() {
  background(255, 255, 255);
  
  // corridoio principale
  fill(0, 255, 0);
  rect(50, 75, 125, 50);
  
  // muso
  fill(255, 0, 0);
  triangle(200, 100, 175, 125, 175, 75);
  
  // oblo pilota
  fill(0, 0, 255);
  circle(150, 100, 40);
  
  // ali posteriori
  triangle(50, 125, 50, 160, 100, 125);
  triangle(50, 75, 50, 40, 100, 75);
  
  // ali anteriori
  triangle(130, 75, 130, 40, 160, 75);
  triangle(130, 125, 130, 160, 160, 125);
  
  // motori posteriori
  rect(40, 80, 10, 15);
  rect(40, 105, 10, 15);
  
  // coda
  fill(255, 0, 0);
  triangle(0, 100, 30, 80, 30, 120);
  
  // cannoni sulle ali posteriori
  fill(0, 255, 0);
  rect(60, 40, 30, 20);
  rect(60, 140, 30, 20);
  
  // cannoni sulle ali anteriori
  rect(140, 40, 30, 20);
  rect(140, 140, 30, 20);
  
  // proiettili cannoni ali posteriori
  fill(255, 0, 0);
  circle(103, 50, 15);
  circle(103, 150, 15);
  
  // proiettili cannoni ali anteriori  
  fill(255, 255, 0);
  circle(180, 50, 15);
  circle(180, 150, 15);
  
  // decorazioni
  square(100, 90, 20);
  square(70, 90, 20);
  
  // linea di simmetria
  line(0, 100, 200, 100);

  saveCanvas(canvas, 'colors_and_styles_exe_astronave_03', 'png');
  noLoop();
}