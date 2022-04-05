var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent('snake_02');
}

function draw() {
  background(255, 255, 255);
  strokeWeight(4);

  fill(0, 255, 0);
  circle(200, 100, 75);
  fill(150, 250, 0);
  circle(280, 100, 75);
  circle(360, 100, 75);
  fill(70, 100, 50);
  circle(360, 180, 75);
  circle(440, 180, 75);
  fill(20, 20, 250);
  circle(520, 180, 75);
  circle(520, 260, 75);
  circle(520, 340, 75);
  fill(255, 239, 0);
  circle(520, 420, 75);
  circle(440, 420, 75);
  circle(440, 500, 75);
  circle(360, 500, 75);
  fill(150, 150, 80);
  circle(280, 500, 75);
  circle(280, 420, 75);
  circle(200, 420, 75);
  fill(220, 0, 0);
  circle(120, 420, 75);

  saveCanvas(canvas, 'colors_and_styles_exe_snake_02', 'png');
  noLoop();
}
