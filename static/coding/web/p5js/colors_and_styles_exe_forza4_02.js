var canvas;
function setup() {
  canvas = createCanvas(625, 540);
  canvas.parent('forza4_02');
}

function draw() {
  background(192,192,64);
  strokeWeight(4);

  fill(255,255,255);
  circle(45,45,83);
  fill(255,255,255);
  circle(45,134,83);
  fill(0,255,255);
  circle(45,224,83);
  fill(255,0,255);
  circle(45,314,83);
  fill(0,255,255);
  circle(45,404,83);
  fill(255,0,255);
  circle(45,494,83);

  fill(255,0,255);
  circle(134,45,83);
  fill(0,255,255);
  circle(134,134,83);
  fill(0,255,255);
  circle(134,224,83);
  fill(0,255,255);
  circle(134,314,83);
  fill(0,255,255);
  circle(134,404,83);
  fill(255,0,255);
  circle(134,494,83);

  fill(255,255,255);
  circle(223,45,83);
  fill(255,255,255);
  circle(223,134,83);
  fill(255,0,255);
  circle(223,224,83);
  fill(255,0,255);
  circle(223,314,83);
  fill(0,255,255);
  circle(223,404,83);
  fill(255,0,255);
  circle(223,494,83);

  fill(255,255,255);
  circle(312,45,83);
  fill(255,255,255);
  circle(312,134,83);
  fill(0,255,255);
  circle(312,224,83);
  fill(255,0,255);
  circle(312,314,83);
  fill(255,0,255);
  circle(312,404,83);
  fill(0,255,255);
  circle(312,494,83);

  fill(255,255,255);
  circle(401,45,83);
  fill(255,0,255);
  circle(401,134,83);
  fill(0,255,255);
  circle(401,224,83);
  fill(0,255,255);
  circle(401,314,83);
  fill(0,255,255);
  circle(401,404,83);
  fill(255,0,255);
  circle(401,494,83);

  fill(255,255,255);
  circle(490,45,83);
  fill(0,255,255);
  circle(490,134,83);
  fill(255,0,255);
  circle(490,224,83);
  fill(0,255,255);
  circle(490,314,83);
  fill(0,255,255);
  circle(490,404,83);
  fill(255,0,255);
  circle(490,494,83);

  fill(255,255,255);
  circle(579,45,83);
  fill(255,0,255);
  circle(579,134,83);
  fill(255,0,255);
  circle(579,224,83);
  fill(0,255,255);
  circle(579,314,83);
  fill(255,0,255);
  circle(579,404,83);
  fill(0,255,255);
  circle(579,494,83);

  saveCanvas(canvas, 'colors_and_styles_exe_forza4_02', 'png');
  noLoop();
}
