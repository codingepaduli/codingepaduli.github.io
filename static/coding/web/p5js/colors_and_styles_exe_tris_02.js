var canvas;
function setup() {
  canvas = createCanvas(420, 420);
  canvas.parent('tris_02');
}

function draw() {
  background(250, 250, 150);
  noFill();
  strokeWeight(5);

  // linee del tris
  line(140, 0, 140, 420);
  line(280, 0, 280, 420);
  line(0, 140, 420, 140);
  line(0, 280, 420, 280);

  // giocatore 1 : "O"
  circle(70, 210, 135);
  circle(210, 210, 135);
  circle(350, 70, 135);
  circle(350, 350, 135);

  // giocatore 2 : "X"
  line(140, 0, 0, 140);
  line(140, 140, 0, 0);
  line(0, 420, 140, 280);
  line(0, 280, 140, 420);
  line(280, 0, 140, 140);
  line(140, 0, 280, 140);

  saveCanvas(canvas, 'colors_and_styles_exe_tris_02', 'png');
  noLoop();
}
