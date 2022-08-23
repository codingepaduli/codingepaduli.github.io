var canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('rgb');
}

function draw() {
  // Note: Don't apply background

  // Note: SCREEN seems to be the blending mode for additive color mixing
  blendMode(SCREEN);

  fill(255, 0, 0);
  circle(150, 100, 200);

  fill(0, 255, 0);
  circle(100, 200, 200);
  
  fill(0, 0, 255);
  circle(200, 200, 200);

  saveCanvas(canvas, 'colors_and_styles_rgb', 'png');
  noLoop();
}
