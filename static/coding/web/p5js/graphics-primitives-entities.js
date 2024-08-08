let canvas;
function setup() {
  canvas = createCanvas(410, 600);
  //canvas.parent('canvas');
}

function draw() {
  background(255, 255, 255);
  fill(0,0,255);
  stroke('black');
  textSize(14);
  
  // punti alfa, delta e teta 
  circle(15,15,5);
  text("Γ",15,10);
  circle(50,30,5);
  text("Δ",50,25);
  circle(15,45,5);
  text("Θ",15,40);
  
  // segmenti
  circle(90,15,5);
  text("A",90,10);
  circle(130,15,5);
  text("B",130,10);
  line(90,15,130,15);
  
  circle(90,35,5);
  text("C",90,30);
  circle(145,55,5);
  text("D",145,50);
  line(90,35,145,55);
  
  // segmenti adiacenti
  circle(165,15,5);
  text("E",165,10);
  circle(195,15,5);
  text("F",195,10);
  circle(225,15,5);
  text("G",225,10);
  line(165,15,195,15);
  line(195,15,225,15);

  circle(165,45,5);
  text("H",165,40);
  circle(195,55,5);
  text("I",195,50);
  circle(225,65,5);
  text("J",225,60);
  line(165,45,195,55);
  line(195,55,225,65);

  // segmenti paralleli verticali
  circle(15,85,5);
  text("K",15,80);
  circle(15,115,5);
  text("L",15,110);
  line(15,85,15,115);
  circle(35,85,5);
  text("M",35,80);
  circle(35,115,5);
  text("N",35,110);
  line(35,85,35,115);

  // segmenti paralleli orizzontali
  circle(55,85,5);
  text("O",55,80);
  circle(85,85,5);
  text("P",85,80);
  line(55,85,85,85);
  circle(55,115,5);
  text("Q",55,110);
  circle(85,115,5);
  text("R",85,110);
  line(55,115,85,115);

  // segmenti paralleli obligui
  circle(115,85,5);
  text("S",115,80);
  circle(135,115,5);
  text("T",135,110);
  line(115,85,135,115);
  circle(135,85,5);
  text("U",135,80);
  circle(155,115,5);
  text("V",155,110);
  line(135,85,155,115);

  // segmenti perpendicolari
  circle(195,80,5);
  text("W",195,75);
  circle(195,115,5);
  text("X",195,110);
  line(195,80,195,115);
  circle(180,95,5);
  text("Y",180,90);
  circle(210,95,5);
  text("Z",210,90);
  line(180,95,210,95);

  // segmenti perpendicolari obligui lambda, xi, pi e sigma
  circle(260,80,5);
  text("Λ",260,75);
  circle(280,120,5);
  text("Ξ",280,115);
  line(260,80,280,120);
  circle(290,90,5);
  text("Π",290,85);
  circle(250,110,5);
  text("Σ",250,105);
  line(290,90,250,110);

  // poligoni
  square(15,135,40);
  triangle(70,135,110,135,90,165);
  rect(130,135,60,30);

  // poligono personalizzato
  beginShape();
  vertex(220, 140);
  vertex(275, 140);
  vertex(240, 150);
  vertex(275, 150);
  vertex(275, 175);
  vertex(220, 175);
  vertex(240, 165);
  endShape(CLOSE);

  // poligoni adiacenti
  square(20,205,40);
  triangle(20+40,205,20+40,205+40,20+40+40,205+20);

  triangle(120,205+40,120+40,205+40,120+20,205);
  triangle(120+40,205+40,120+20,205,120+40+20,205);
  quad(120+40,205+40, 120+40+20,205, 120+40+20+60,205+20, 180,260);

  // cerchio
  fill('white');
  circle(50, 290, 60);
  line(50,290,50+30,290);

  // cerchi tangenti
  fill('blue');
  circle(125, 290, 60);
  circle(175, 290, 40);
  
  // corona
  circle(240, 290, 60);
  fill('white');
  circle(240, 290, 30);

  angleMode(RADIANS);

  // corda
  fill('white');
  circle(320, 290, 60);
  line(320,290-30,320+30,290,0,PI);
  
  fill('blue');

  // ellisse
  ellipse(50, 350, 70, 40);
  
  // ellissi tangenti
  ellipse(125, 350, 70, 40);
  ellipse(195, 350, 70, 30);

  // poligono tangente ad un ellisse
  ellipse(265, 350, 50, 30);
  triangle(290,330,290,330+40,290+40,330+20);

  // angoli ed archi
  fill('white');
  arc(40, 430, 50, 50, PI, PI + HALF_PI, OPEN);
  line(40, 430, 40, 430-45);
  line(40, 430, 40-45, 430);

  // angoli ed archi
  fill('white');
  arc(100, 430, 50, 50, PI, PI + HALF_PI, OPEN);
  line(100, 430, 100-45, 430);
  line(100, 430, 100, 430-45);
  arc(100, 430, 50, 50, PI + HALF_PI, TWO_PI, OPEN);
  line(100, 430, 100+45, 430);

  arc(200, 430, 50, 50, PI - HALF_PI/2, TWO_PI - HALF_PI/4, OPEN);

  arc(270, 430, 70, 25, PI, TWO_PI - HALF_PI/4, OPEN);


  
 
  saveCanvas(canvas, 'graphics-primitives-entities.png', 'png');
  noLoop();
}