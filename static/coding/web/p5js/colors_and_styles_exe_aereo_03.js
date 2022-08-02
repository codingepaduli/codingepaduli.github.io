let canvas;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('aereo_03');
}

function draw() {
  background(0, 0, 255);

  strokeWeight(1);
  stroke(0,0,0);
  fill(0,0,0);

  // corpo dell'aereo
  ellipse(200,170,50,300);

  // oblò
  fill(255,0,0);
  circle(192,50,7);
  circle(208,50,7);

  // ali laterali
  fill(0,0,0);
  triangle(175,120,175,200,30,150);
  triangle(225,205,225,120,370,150);

  // coda
  triangle(170,310,230,310,200,350);

  // sporgenze sulle ali laterali
  strokeWeight(1);
  stroke(255,0,0);
  fill(0,0,0,);
  rect(150,180,10,50);
  rect(120,180,10,35);
  rect(90,170,10,20);
  rect(250,180,10,50);
  rect(280,180,10,35);
  rect(310,170,10,20);

  strokeWeight(4);
  stroke(0,0,0);

  // colpi lato sinistro
  fill(0,255,0);
  ellipse(95,220,10,20);
  ellipse(95,340,10,20);
  fill(255,0,0);
  circle(125,275,7);
  circle(125,355,7);
  circle(156,250,7);
  circle(156,330,7);

  // colpi lato destro
  fill(255,0,0);
  circle(256,255,7);
  circle(256,335,7);
  circle(286,285,7);
  circle(286,365,7);

  fill(0,255,0);
  ellipse(317,220,10,20);
  ellipse(317,340,10,20);

  textSize(14);
  text("WAR MACHINE",150,160);

  saveCanvas(canvas, 'colors_and_styles_exe_aereo_03', 'png');
  noLoop();
}
