// coordinata X del cerchio C1
let xCerchio1 = 500;

// coordinata Y del cerchio C1
let yCerchio1 = 150;

// diametro del cerchio C1
let diameterC1 = 150;

// coordinata X del rettangolo R1
let xRectangle1 = 350;

// coordinata Y del rettangolo R1
let yRectangle1 = 225;

// base del rettangolo R1
let hR1 = 400;

// base del rettangolo R1
let baseR1 = 300;

//coordinata X del cerchio C2
let xCerchio2 = 475;

//coordinata Y del cerchio C2
let yCerchio2 = 120;

// diametro del cerchio C2
let diameterC2 = 30;

// coordinata X del cerchio C3
let xCerchio3 = 525;

// coordinata Y del cerchio C3
let yCerchio3 = 120;

// diametro del cerchio C3
let diameterC3 = 30;

//coordinata X della linea L1
let xL1 = 450;

// coordinata Y della linea L1
let yL1 = 95;

// seconda coordinata X2 della L1
let x2L1 = 450;

//seconda coordinata Y2 della L1
let y2L1 = 45;

//coordinata X della linea L2
let xL2 = 550;

// coordinata Y della linea L2
let yL2 = 95;

// seconda coordinata X2 della L2
let x2L2 = 550;

//seconda coordinata Y2 della L2
let y2L2 = 45;

// coordinata X del cerchio C4
let xCerchioC4 = 450;

// coordinata Y del cerchio C4
let yCerchioC4 = 30;

// diametro del cerchio C4
let diameterC4 = 45;

// coordinata X del cerchio C5
let xCerchioC5 = 550;

// coordinata Y del cerchio C5
let yCerchioC5 = 30;

// diametro del cerchio C5
let diameterC5 = 45;

//coordinata X della linea L3
let xL3 = 550;

// coordinata Y1 della linea L3
let yL3 = 200;

// seconda coordinata X2 della L3
let x2L3 = 450;

//seconda coordinata Y2 della L3
let y2L3 = 200;

//coordinata X del quadrato Q1
let xQ1 = 480;

//coordinata Y del quadrato Q1
let yQ1 = 145;

// lato del quadrato Q1
let latoQ1 = 40;

// coordinata X del rettangolo R2
let xRectangle2 = 400;

// coordinata Y del rettangolo R2
let yRectangle2 = 625;

// base del rettangolo R2
let baseR2 = 300;

// altezza del rettangolo R2
let hR2 = 50;

// coordinata X del rettangolo R3
let xRectangle3 = 550;

// coordinata Y del rettangolo R3
let yRectangle3 = 625;

// base del rettangolo R3
let baseR3 = 300;

// altezza del rettangolo R3
let hR3 = 50;

// coordinata X del cerchio C6
let xCerchioC6 = 300;

// coordinata Y del cerchio C6
let yCerchioC6 = 250;

// diametro del cerchio C6
let diameterC6 = 100;

// coordinata X del rettangolo R4
let xRectangle4 = 275;

// coordinata Y del rettangolo R4
let yRectangle4 = 300;

// base del rettangolo R4
let baseR4 = 300;

// altezza del rettangolo R4
let hR4 = 50;

// coordinata X del cerchio C7
let xCerchioC7 = 700;

// coordinata Y del cerchio C7
let yCerchioC7 = 250;

// diametro del cerchio C7
let diameterC7 = 100;

// coordinata X del rettangolo R5
let xRectangle5 = 675;

// coordinata Y del rettangolo R5
let yRectangle5 = 300;

// base del rettangolo R5
let baseR5 = 300;

// altezza del rettangolo R5
let hR5 = 50;


function setup() {
  // creo area da disegno di 1000 x 1000
  createCanvas(1000, 1000);
}

function draw() {
  // Modello colori R G B
  background(255, 0, 255);

  // bisettrice verticale dell'area da disegno
  line(500, 0, 500, 1000);


  fill(255, 0, 0);

  // disegno il cerchio C1
  circle(xCerchio1, yCerchio1, diameterC1);

  fill(0, 255, 0);
  // disegno il rettangolo R1
  rect(xRectangle1, yRectangle1, baseR1, hR1);

  fill(0, 255, 0);

  //disegno il cerchio C2
  circle(xCerchio2, yCerchio2, diameterC2);

  fill(0, 255, 255);

  //disegno il cerchio C3
  circle(xCerchio3, yCerchio3, diameterC3);

  //disegno la linea L1
  line(xL1, yL1, x2L1, y2L1);

  //disegno la linea L2
  line(xL2, yL2, x2L2, y2L2);

  fill(0, 0, 0);

  // disegno il cerchio C4
  circle(xCerchioC4, yCerchioC4, diameterC4);

  // disegno il cerchio C5
  circle(xCerchioC5, yCerchioC5, diameterC5);

  //disegno la linea L3
  line(xL3, yL3, x2L3, y2L3);

  fill(255, 255, 0);

  //disegno il quadrato Q1
  square(xQ1, yQ1, latoQ1);

  // disegno il rettangolo R2
  rect(xRectangle2, yRectangle2, hR2, baseR2);

  // disegno il rettangolo R3
  rect(xRectangle3, yRectangle3, hR3, baseR3);

  fill(255, 255, 255);

  // disegno il cerchio C6
  circle(xCerchioC6, yCerchioC6, diameterC6);

  fill(0, 0, 255);

  // disegno il rettangolo R4
  rect(xRectangle4, yRectangle4, hR4, baseR4);

  fill(255, 255, 255);

  // disegno il cerchio C7
  circle(xCerchioC7, yCerchioC7, diameterC7);

  fill(0, 0, 255);

  // disegno il rettangolo R5
  rect(xRectangle5, yRectangle5, hR5, baseR5);
}
