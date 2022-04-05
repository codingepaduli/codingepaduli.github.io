var canvas;
function setup() {
  canvas = createCanvas(1050, 1050);
  canvas.parent('dama_02');
}

function draw() {
  background(98, 76, 54);

  // disegno bordo dama
  fill(255, 255, 255);
  rect(5, 5, 1040, 1040);

  // triangoli rossi colonna A C E G
  fill(255, 0, 0);
  rect(5, 5, 130, 130);
  rect(5, 265, 130, 130);
  rect(5, 525, 130, 130);
  rect(5, 785, 130, 130);

  rect(265, 5, 130, 130);
  rect(265, 265, 130, 130);
  rect(265, 525, 130, 130);
  rect(265, 785, 130, 130);

  rect(525, 5, 130, 130);
  rect(525, 265, 130, 130);
  rect(525, 525, 130, 130);
  rect(525, 785, 130, 130);

  rect(785, 5, 130, 130);
  rect(785, 265, 130, 130);
  rect(785, 525, 130, 130);
  rect(785, 785, 130, 130);

  // rettangoli rossi B D F H
  rect(135, 135, 130, 130);
  rect(135, 395, 130, 130);
  rect(135, 655, 130, 130);
  rect(135, 915, 130, 130);

  rect(395, 135, 130, 130);
  rect(395, 395, 130, 130);
  rect(395, 655, 130, 130);
  rect(395, 915, 130, 130);

  rect(655, 135, 130, 130);
  rect(655, 395, 130, 130);
  rect(655, 655, 130, 130);
  rect(655, 915, 130, 130);

  rect(915, 135, 130, 130);
  rect(915, 395, 130, 130);
  rect(915, 655, 130, 130);
  rect(915, 915, 130, 130);

  // disegno pedine nere
  fill(0, 0, 0);
  circle(70, 70, 128);
  circle(330, 70, 128);
  circle(590, 70, 128);
  circle(850, 70, 128);

  //circle(200, 200, 128);
  //circle(460, 200, 128);
  circle(720, 200, 128);
  circle(980, 200, 128);

  //circle(70, 330, 128);
  //circle(330, 330, 128);
  //circle(590, 330, 128);
  circle(850, 330, 128);

  // pedine mosse
  circle(70, 850, 128);
  circle(330, 850, 128);

  circle(330, 590, 128);

  // disegno pedine bianche
  fill(255, 255, 240);

  circle(590, 590, 128);

  // circle(70, 850, 128);
  // circle(330, 850, 128);
  circle(590, 850, 128);
  circle(850, 850, 128);

  //circle(200, 720, 128);
  //circle(460, 720, 128);
  //circle(720, 720, 128);
  circle(980, 720, 128);

  circle(200, 980, 128);
  circle(460, 980, 128);
  circle(720, 980, 128);
  circle(980, 980, 128);

  saveCanvas(canvas, 'colors_and_styles_exe_dama_02', 'png');
  noLoop();
}
