let canvas;
let y;
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

  //condizione iniziale y=25
  //condizione finale y<=375
  //istruzione di incremento y=y+50
  //blocco istruzioni: circle(25, y, 50)

  //ciclo for
  //colore rosso RGB
  fill(255, 0, 0);
  for (y = 25; y <= 375; y = y + 50) {
    circle(75, y, 50);
  }

  //ciclo do-while
  //colore verde RGB
  fill(0, 255, 0);
  y = 25;
  do {
    circle(125, y, 50);
    y = y + 50;
  } while (y <= 375);

  // ciclo while
  y = 25;
  while (y <= 375) {
    fill(0, 0, y/2);
    circle(175, y, 50);
    y = y + 50;
  }

  saveCanvas(canvas, 'loops_exe_01', 'png');
  noLoop();
}
