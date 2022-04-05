var canvas;
function setup() {
  canvas = createCanvas(732, 630);
  canvas.parent('forza4_01');
}

function draw() {
  background(0, 0, 250);
  strokeWeight(4);

  fill(255, 255, 0);
  circle(50, 50, 100);
  fill(255, 255, 255);
  circle(155, 50, 100);
  fill(255, 255, 255);
  circle(260, 50, 100);
  fill(255, 255, 255);
  circle(365, 50, 100);
  fill(255, 255, 255);
  circle(470, 50, 100);
  fill(255, 255, 255);
  circle(575, 50, 100);
  fill(255, 255, 255);
  circle(680, 50, 100);

  fill(255, 255, 0);
  circle(50, 155, 100);
  fill(255, 0, 0);
  circle(155, 155, 100);
  fill(255, 0, 0);
  circle(260, 155, 100);
  fill(255, 255, 255);
  circle(365, 155, 100);
  fill(255, 255, 255);
  circle(470, 155, 100);
  fill(255, 255, 255);
  circle(575, 155, 100);
  fill(255, 255, 255);
  circle(680, 155, 100);

  fill(255, 255, 0);
  circle(50, 260, 100);
  fill(255, 0, 0);
  circle(155, 260, 100);
  fill(255, 255, 0);
  circle(260, 260, 100);
  fill(255, 255, 255);
  circle(365, 260, 100);
  fill(255, 255, 255);
  circle(470, 260, 100);
  fill(255, 255, 255);
  circle(575, 260, 100);
  fill(255, 255, 255);
  circle(680, 260, 100);

  fill(255, 255, 0);
  circle(50, 365, 100);
  fill(255, 0, 0);
  circle(155, 365, 100);
  fill(255, 255, 0);
  circle(260, 365, 100);
  fill(255, 255, 255);
  circle(365, 365, 100);
  fill(255, 255, 255);
  circle(470, 365, 100);
  fill(255, 255, 255);
  circle(575, 365, 100);
  fill(255, 255, 255);
  circle(680, 365, 100);

  fill(255, 255, 0);
  circle(50, 470, 100);
  fill(255, 0, 0);
  circle(155, 470, 100);
  fill(255, 0, 0);
  circle(260, 470, 100);
  fill(255, 255, 255);
  circle(365, 470, 100);
  fill(255, 255, 255);
  circle(470, 470, 100);
  fill(255, 255, 255);
  circle(575, 470, 100);
  fill(255, 255, 0);
  circle(680, 470, 100);

  fill(255, 255, 0);
  circle(50, 575, 100);
  fill(255, 0, 0);
  circle(155, 575, 100);
  fill(255, 0, 0);
  circle(260, 575, 100);
  fill(255, 0, 0);
  circle(365, 575, 100);
  fill(255, 255, 0);
  circle(470, 575, 100);
  fill(255, 255, 0);
  circle(575, 575, 100);
  fill(255, 0, 0);
  circle(680, 575, 100);
  fill(255, 255, 0);

  saveCanvas(canvas, 'myCanvas', 'png');
  noLoop();
}
