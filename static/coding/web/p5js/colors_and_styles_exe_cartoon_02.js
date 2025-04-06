let canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('canvas');
}
function draw() {
  background(255, 255, 255);

  fill(255,192,203);
  circle(75,50,100);
 
  fill(255,255,255);
  circle(55,45,20);
  fill(255,255,255);
  circle(95,45,20);
  fill(0,0,0);
  circle(95,45,10);
  fill(0,0,0);
  circle(55,45,10);
  
  fill(0,0,255);;
  rect(25,100,100, 83);
  
  fill(0,0,0);;
  rect(55,80,40, 5);
  
  fill(0,0,0);;
  rect(45,20,20, 5);
  
  fill(0,0,0);
  rect(85,20,20, 5);
  
  fill(255,199,0);
  rect(73,48,5, 15);
  fill(0,0,174);
  rect(26,150,25,15);
  fill(0,0,174);
  rect(99,150,25,15);
  fill(0,0,174);
  rect(41,183,70,5);
  fill(0,0,255);
  rect(41,187,70,70);
  
  saveCanvas(canvas, 'colors_and_styles_exe_cartoon_02', 'png');
  noLoop();
}