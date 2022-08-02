let canvas;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('aereo_02');
}

function draw() {
  background(0, 0, 255);
  strokeWeight(2);
  stroke(0, 100, 0);

  // muso ed oblò
  fill(255, 255, 255);
  circle(200, 40 ,40);
  fill(0, 100, 0);
  rect(195, 10, 10, 10);

  // 2 eliche sul muso
  line(195, 10, 100, 10);
  line(300, 10, 100, 10);

  // ali laterali
  rect(95, 100,100, 50);
  rect(205, 100,100, 50);

  // corpo
  rect(180, 40, 40, 230);

  // sporgenze sulle ali laterali
  fill(0, 0, 0);
  stroke(0, 0, 0);
  rect(100, 90, 10, 10);
  rect(150, 90, 10, 10);
  rect(240, 90, 10, 10);
  rect(290, 90, 10, 10);

  // colpi di arma da fuoco
  fill(255, 255, 0);
  stroke(255, 255, 0);
  line(105, 60, 105, 30);
  line(155, 60, 155, 30);
  line(245, 60, 245, 30);
  line(295, 60, 295, 30);

  // coda
  fill(0, 100, 0);
  stroke(0, 100, 0);
  ellipse(200, 259, 90, 30);
  line(165, 250, 165, 300);
  line(230, 250, 230, 300);

  // nuvole
  stroke(255, 255, 255);
  fill(255, 255, 255);
  ellipse(350, 200, 50, 20);
  ellipse(130, 200, 50, 20);
  ellipse(300, 300, 50, 20);
  ellipse(50, 300, 50, 20);
  ellipse(330, 30, 50, 20);
  ellipse(50, 30, 50, 20);

  saveCanvas(canvas, 'colors_and_styles_exe_aereo_02', 'png');
  noLoop();
}
