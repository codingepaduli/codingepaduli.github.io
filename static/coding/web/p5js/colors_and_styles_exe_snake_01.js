var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent('snake_01');
}

function draw() {
  background(255, 255, 255);
  strokeWeight(4);

  fill(0, 255, 0);
  circle(50, 50, 73);
  circle(50, 128, 73);
  circle(50, 206, 73);
  circle(50, 284, 73);
  circle(50, 362, 73);
  circle(128, 362, 73);
  circle(128, 440, 73);
  circle(206, 440, 73);
  circle(284, 440, 73);
  circle(284, 362, 73);
  circle(284, 284, 73);
  circle(362, 284, 73);
  circle(440, 284, 73);
  circle(440, 206, 73);
  circle(440, 128, 73);
  circle(362, 128, 73);

  fill(255, 0, 0);
  circle(362, 50, 73);

  saveCanvas(canvas, 'colors_and_styles_exe_snake_01', 'png');
  noLoop();
}
