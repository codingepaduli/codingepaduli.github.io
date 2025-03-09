let canvas;
function setup() {
  canvas = createCanvas(250, 250);
  canvas.parent('canvas');
}

function draw() {
  translate(20, 20);
  
  //colore dello sfondo
  background(220, 220, 220);
  
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  stroke(0, 0, 0);
  
  noFill();
  strokeWeight(3);
  triangle(0, 50, 200, 50, 100, 200);
  triangle(0, 150, 200, 150, 100, 0);

  fill(0, 255, 0);
  circle(0, 50, 20);
  circle(100, 0, 20);
  circle(200, 50, 20);
  circle(0, 150, 20);
  circle(100, 200, 20);
  circle(200, 150, 20);

  fill(0, 0, 0);
  strokeWeight(0.5);
  text("A", 0, 50);
  text("B", 100, 0);
  text("C", 200, 50);
  text("D", 0, 150);
  text("E", 100, 200);
  text("F", 200, 150);

  saveCanvas(canvas, 'graphics-primitives_exe_star_2', 'png');
  noLoop();
}
