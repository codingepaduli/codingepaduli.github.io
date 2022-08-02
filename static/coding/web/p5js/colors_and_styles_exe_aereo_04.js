let canvas;
function setup() {
  canvas = createCanvas(100, 100);
  canvas.parent('aereo_04');
}

function draw() {
  background(110, 200, 235);

  // muso ed oblò dell'aereo
  fill(50, 55, 60);
  ellipse(21, 50, 20, 10);
  fill(215, 222, 230);
  circle(19, 50, 10, 10);

  // corpo dell'aereo
  fill(50, 55 , 60);
  rect(19, 45, 50, 10 );

  // due ali sovrapposte
  fill(255, 0, 0);
  rect(25, 25, 25, 50);
  fill(0, 140 ,0);
  rect(29, 25, 17, 50);

  // ala posteriore
  fill(0, 0, 255);
  rect(60, 33, 10, 35);

  // decorazioni ala posteriore
  fill(255, 255, 0);
  circle(65, 38, 3, 35);
  circle(65, 50, 3, 35);
  circle(65, 62, 3, 35);

  // nuvole
  fill(215, 240, 255);
  ellipse(95, 30, 20 , 10);
  ellipse(89, 70, 20 , 10);
  ellipse(50, 97, 20, 10);
  ellipse(20, 2, 20, 10);

  saveCanvas(canvas, 'colors_and_styles_exe_aereo_04', 'png');
  noLoop();
}
