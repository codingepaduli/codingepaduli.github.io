let canvas;
function setup() {
  canvas = createCanvas(340, 340);
  canvas.parent('canvas');
}

function draw() {
  scale(0.5);
  translate (40,40);
  
  background(150,150,150);
  stroke(0,0,0);
  strokeWeight(8);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(36);

  //Tavola tris
  line(200,0,200,600);
  line(400,0,400,600);
  line(0,0,0,600);
  line(0,200,600,200);
  line(0,400,600,400);
  line(600,0,600,600);
  line(0,600,600,600);
  line(0,0,600,0);
  
  // X nel quadrato A-B-E-F
  stroke(0,0,255);
  line(0,0,200,200);
  line(0,200,200,0);
  stroke(0,0,0);
  fill(0,0,0);
  fill(150,150,150);
  // Cerchio nel quadrato F-G-L-M
  stroke(0,255,0);
  circle(300,300,200);
  // X nel quadrato I-L-O-P
  stroke(0,0,255);
  line(0,0,200,200);
  line(0,400,200,600);
  line(0,600,200,400);
  // Cerchio nel quadrato E-F-I-L
  stroke(0,255,0);
  circle(100,300,200);
  // X nel quadrato G-H-M-N
  stroke(0,0,255);
  line(400,200,600,400);
  line(600,200,400,400);
  // Cerchio nel quadrato L-M-P-Q
  stroke(0,255,0);
  circle(300,500,200);
  // X nel quadrato B-C-F-G
  stroke(0,0,255);
  line(200,0,400,200);
  line(400,0,200,200);
  // Cerchio nel quadrato C-D-G-H
  stroke(0,255,0);
  circle(500,100,200);
  // X nel quadrato M-N-Q-R
  stroke(0,0,255);
  line(400,400,600,600);
  line(600,400,400,600);
  
  //Pallini di colore blu
  stroke(0,0,0);
  fill(0,0,255);
  circle(0,0,50);
  circle(200,0,50);
  circle(400,0,50);
  circle(600,0,50);
  circle(0,200,50);
  circle(0,400,50);
  circle(0,600,50);
  circle(200,600,50);
  circle(400,600,50);
  circle(600,200,50);
  circle(600,400,50);
  circle(600,600,50);
  
  //Lettere
  fill(255,255,255);
  text("A",0,0);
  text("B",200,0);
  text("C",400,0);
  text("D",600,0);
  text("E",0,200);
  text("H",600,200); 
  text("I",0,400);
  text("N",600,400);
  text("O",0,600);
  text("P",200,600);
  text("Q",400,600);
  text("R",600,600);
  
  //Pallini centrali di colore rosso
  fill(255,0,0);
  circle(200,200,50);
  circle(400,200,50);
  circle(200,400,50);
  circle(400,400,50);
  
  // Lettere dei pallini centrali
  fill(255,255,255);
  text("F",200,200);
  text("G",400,200);
  text("L",200,400);
  text("M",400,400);
  
  //Pallini dei cerchi
  fill(0,255,0);
  stroke(0,0,0);
  circle(100,300,50);
  circle(300,300,50);
  circle(500,100,50);
  circle(300,500,50);
  
  //Lettere dei pallini
  fill(255,255,255);
  text("S",500,100);
  text("T",100,300);
  text("U",300,300);
  text("V",300,500);
  
  saveCanvas(canvas, 'graphics-primitives_exe_tris_2', 'png');
  noLoop();
}
