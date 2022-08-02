let canvas;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('loops_02');
}

function draw() {
  background(0, 0, 0);

  fill(0, 255, 0);

  // creo i blocchi uno alla volta
  rect(0, 50, 40, 20);
  rect(40, 50, 40, 20);
  rect(80, 50, 40, 20);
  rect(120, 50, 40, 20);
  // ...
  rect(360, 50, 40, 20);

  // Analisi per usare i cicli

  // X variabile -> Parte da 0, Arriva a 360, incrementa ogni volta di 40
  // Y = 50
  // Base = 40
  // Altezza = 20

  let x = 0;

  // Ciclo Determinato (For)
  fill(255, 0, 0);
  for (x = 0; x <= 360; x=x+40) {
    rect(x, 70, 40, 20);
  }

  // Ciclo Indeterminato (while)
  fill(0, 0, 255);
  x = 0;              // condizione inizio ciclo
  while (x <= 360) {   // condizione fine ciclo
    rect(x, 90, 40, 20);

    x = x + 40;       // incremento
  }

  // Ciclo Indeterminato (do-while)
  fill(255, 0, 255);
  x = 0;              // condizione inizio ciclo
  do {
    rect(x, 110, 40, 20);

    x = x + 40;       // incremento
  } while (x <= 360);   // condizione fine ciclo


  // Analisi
  // X variabile -> Parte da 0, Arriva a 360, incrementa ogni volta di 40
  // Y variabile -> Parte da 50, Arriva a 110, incrementa ogni volta di 20

  for (x = 0; x<=360; x=x+40) {
    for (let y = 150; y<=210; y=y+20) {
      fill(x/2, y, x/2+y-50);
      rect (x, y, 40, 20);
    }
  }

  saveCanvas(canvas, 'loops_exe_02', 'png');
  noLoop();
}
