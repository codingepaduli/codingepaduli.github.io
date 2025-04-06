let canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('canvas');
}
function draw() {
  background(255, 255, 255);

  fill(0,0,0);
  circle(200,150,170);
  fill(255,255,255);

  //occhi
  circle(160,140,25);
  circle(235,140,25);
  fill(0,0,0);
  circle(165,145,7);
  circle(230,140,7);

  //naso e bocca
  fill(255,255,255);
  rect(195,160,10,10);
  rect(170,200,60,5);
  
  rect(165,190,6,10);
  rect(230,190,6,10);

  //lingua
  fill(203,0,0);
  rect(200,200,20,20);
  
  fill(255,255,255)
  rect(145,110,25,8);
  rect(225,110,25,8);
  
  saveCanvas(canvas, 'colors_and_styles_exe_cartoon_01', 'png');
  noLoop();
}