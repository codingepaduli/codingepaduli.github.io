var canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('cymk');
}

function draw() {
  background(255, 255, 255);

  blendMode(MULTIPLY);

  fill(0, 255, 255);
  circle(150, 100, 200);

  fill(255, 255, 0);
  circle(100, 200, 200);
  
  fill(255, 0, 255);
  circle(200, 200, 200);

  saveCanvas(canvas, 'colors_and_styles_cymk', 'png');
  noLoop();
}
