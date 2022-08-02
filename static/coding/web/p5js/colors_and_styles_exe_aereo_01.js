let canvas;
function setup() {
  canvas = createCanvas(100, 100);
  canvas.parent('aereo_01');
}

function draw() {
  background(0, 150, 220);

  // muso ed oblò dell'aereo
  fill(200, 220, 250);
  ellipse(50, 22, 8, 10);
  fill(0, 150, 255);
  circle(50, 25, 10, 10);

  // corpo dell'aereo con striscie
  fill(200, 220, 250);
  rect(45, 25, 10, 50);
  fill(200, 0, 0);
  rect(45, 55, 10, 8);

  // ali anteriori e di coda
  fill(200, 220, 230);
  triangle(5, 32, 45, 50, 45,32);
  triangle(95, 32, 55, 50, 55,32);
  triangle(40, 75, 45, 75, 45, 65);
  triangle(60, 75, 55, 75, 55, 65);

  // sporgenze motori sulle ali
  rect(25, 28, 5, 7);
  rect(70, 28, 5, 7);

  // striscie sulle ali
  fill(200, 0, 0);
  rect(35, 32, 5, 14);
  rect(60, 32, 5, 14);

  // nuvole
  fill(255, 255, 255);
  ellipse(85, 60, 20, 10);
  ellipse(15, 48, 20, 10);
  ellipse(32, 90, 20, 10);
  ellipse(20, 6, 20, 10);

  // colpi d'arma da fuoco
  fill(255, 195, 0);
  ellipse(28, 15, 5, 10);
  ellipse(72, 15, 5, 10);

  saveCanvas(canvas, 'colors_and_styles_exe_aereo_01', 'png');
  noLoop();
}
