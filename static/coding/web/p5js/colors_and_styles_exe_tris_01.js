var canvas;
function setup() {
  canvas = createCanvas(330, 330);
  canvas.parent('tris_01');
}

function draw() {
  background(150, 175, 150);
  noFill();
  strokeWeight(5);

  // linee del tris
  line(0, 110, 330, 110);
  line(0, 220, 330, 220);
  line(110, 0, 110, 330);
  line(220, 0, 220, 330);

  // giocatore 1 : "O"
  circle(55, 55, 100);
  circle(165, 55, 100);
  circle(275, 55, 100);
  circle(165, 165, 100);

  // giocatore 2 : "X"
  line(0, 220, 110, 330);
  line(0, 330, 110, 220);

  line(110, 220, 220, 330);
  line(110, 330, 220, 220);

  line(220, 220, 330, 110);
  line(220, 110, 330, 220);

  saveCanvas(canvas, 'colors_and_styles_exe_tris_01', 'png');
  noLoop();
}
