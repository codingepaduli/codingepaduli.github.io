let canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('canvas');
}
function draw() {
  background(255, 255, 255);

  fill(255,192,203);
  circle(75,50,100);//testa

  fill(50,150,255);
  rect(25,100,100,130)//corpo

  fill(50,150,255);//braccio sinistro
  rect(20,105,25,100);

  fill(50,150,255);
  rect(105,105,25,100);//braccio destro

  fill(255,192,203)
  rect(105,195,25,25)//mano destra

  fill(255,192,203)
  rect(20,195,25,25)//mano sinistra

  fill(0,0,0);
  circle(55,50,10) //occhi

  fill(0,0,0);//occhi
  circle(95,50,10)

  fill(0,0,0)
  rect(55,70,40,5)//sopracciglia

  fill(0,0,0)
  rect(85,25,25,5)//sopraccigla

  fill(0,0,0)
  rect(43,35,25,5)//bocca

  fill(7,31,53)
  rect(25,230,40,150) //gamba sinistra

  fill(7,31,53)
  rect(85,230,40,150) //gamba destra

  saveCanvas(canvas, 'colors_and_styles_exe_cartoon_03', 'png');
  noLoop();
}