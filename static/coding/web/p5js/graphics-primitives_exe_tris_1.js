let canvas;
function setup() {
  canvas = createCanvas(340, 340);
  canvas.parent('canvas');
}

function draw() {  
  
  translate(20, 20);
  
  //colore dello sfondo
  background(220);
  
  //spessore linee
  strokeWeight(4);

  //area di gioco
  fill(255);
  square(0,0,300);
  
  
  //linee del gioco
  stroke(0,0,0);
  line(100,0, 100,300);
  line(200,0, 200,300);
  line(0,100, 300,100);
  line(0,200, 300,200);
  
  //colore rosso per X
  stroke(255,0,0);
  
  //X in alto a sinistra
  line(0,0, 100,100);
  line(0,100, 100,0);
  
  //X in mezzo a sinistra
  line(0,100, 100,200);
  line(0,200, 100,100);
  
  //colore blu per O
  stroke(0,0,255);
  fill(220,220,220);
  
  //cercio in basso a sinistra
  circle(50,250,100);
  point(50,250);
  
  //cercio in alto al centro
  circle(150,50,100);
  point(150,50);
  
  //cercio in mezzo al centro
  circle(150,150,100);
  point(150,150);
  
  stroke(255,0,0);
  
  //X in basso al centro
  line(100,200, 200,300);
  line(100,300, 200,200);
  
  //X in alto a destra
  line(200,0, 300,100);
  line(200,100, 300,0);
  
  //X in mezzo a destra
  line(200,100, 300,200);
  line(200,200, 300,100);
  
  
  stroke(0,0,255);
  //cercio in basso a destra
  circle(250,250,100);
  point(250,250);
  
  stroke(0,0,0);
  
  //cerchi esterni colore nero
  fill(0,0,0);
  
  circle(0,0,20);
  circle(100,0,20);
  circle(200,0,20);
  circle(300,0,20);
  circle(0,100,20);
  circle(300,100,20);
  circle(0,200,20);
  circle(300,200,20);
  circle(0,300,20);
  circle(100,300,20);
  circle(200,300,20);
  circle(300,300,20);
  
  //cerchi interni colore rosso
  circle(100,100,20);
  circle(200,100,20);
  circle(100,200,20);
  circle(200,200,20);
  
  
  // punti
  fill(255, 255, 255);
  stroke(0, 0, 0);
  textAlign(CENTER,CENTER);
  textSize(18);
  textStyle(BOLD);
  text("A", 0,0);
  text("B", 100,0);
  text("C", 200,0);
  text("D", 300,0);
  text("E", 0,100);
  text("F", 100,100);
  text("G", 200,100);
  text("H", 300,100);
  text("I", 0,200);
  text("L", 100,200);
  text("M", 200,200);
  text("N", 300,200);
  text("O", 0,300);
  text("P", 100,300);
  text("Q", 200,300);
  text("R", 300,300);
  
  //punti centrali cerchi
  text("S", 150,70);
  text("T", 150,170);
  text("U", 50,270);
  text("V", 250,270);
  
  saveCanvas(canvas, 'graphics-primitives_exe_tris', 'png');
  noLoop();
}
