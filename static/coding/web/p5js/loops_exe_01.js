let canvas;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('loops_01');
}

function draw() {
  background(0, 0, 0);

  fill(255, 255, 255);
  // operazione svolta a mano
  circle(25, 25, 50);
  circle(25, 75, 50);
  circle(25, 125, 50);
  // ...
  circle(25, 375, 50);

  //condizione iniziale Y=25
  //condizione finale Y<=375
  //istruzione di incremento Y=Y+50
  //blocco istruzioni: circle(25, Y, 50)

  //ciclo for
  //colore rosso RGB
  fill(255, 0, 0);
  for (Y = 25; Y <= 375; Y = Y + 50) {
    circle(75, Y, 50);
  }

  //ciclo do-while
  //colore verde RGB
  fill(0, 255, 0);
  Y = 25;
  do {
    circle(125, Y, 50);
    Y = Y + 50;
  } while (Y <= 375);

  // ciclo while
  Y = 25;
  while (Y <= 375) {
    fill(0, 0, Y/2);
    circle(175, Y, 50);
    Y = Y + 50;
  }

  saveCanvas(canvas, 'loops_exe_01', 'png');
  noLoop();
}
