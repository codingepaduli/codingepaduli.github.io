let canvas;
function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('loops_03');
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 0);

   rect(0, 50, 100, 30);
   rect(100, 50, 100, 30);
   rect(200, 50, 100, 30);
   rect(300, 50, 100, 30);
   // ..
   rect(500, 50,100, 30);


  // Analisi
  // Variabile posX: Inizia da 0, Finisce a 500, incrementa di 100
  // posY = 50
  // base = 100
  // altezza = 30

  let posX;

  fill(30, 120, 0);
  // Ciclo FOR
  for (posX=0; posX <= 500; posX = posX + 100) {
    rect(posX, 80, 100, 30);
  }

  fill(30, 130, 120);
  // Ciclo While
  posX = 0;               // condizione iniziale
  while (posX <= 500) {   // condizione finale
    rect(posX, 110, 100, 30);

    posX = posX + 100;    // incremento
  }

  fill(204, 58, 220);
  // Ciclo Do-While
  posX = 0;              // condizione iniziale
  do {
    rect(posX, 140, 100, 30);

    posX = posX + 100;    // incremento
  } while (posX <= 500);


  // Analisi
  // Variabile posX: Vedere ciclo FOR
  // posY variabile: inizia da 50, finisce a 140, incrementa di 30
  // base = 100
  // altezza = 30

  for (let posY = 250; posY <= 340; posY = posY + 30) {
    for (posX=0; posX <= 500; posX = posX + 100) {
      fill (posX/2, posY-100, posX/2 + posY - 200);
      rect(posX, posY, 100, 30);
    }
  }

  saveCanvas(canvas, 'loops_exe_03', 'png');
  noLoop();
}
