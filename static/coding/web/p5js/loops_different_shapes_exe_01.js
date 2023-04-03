let canvas;
let y;
function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.parent('loop_diff');
}

function draw() {
  background(0, 0, 0);

  fill(255, 255, 255);
  // operazione di disegno dei quadrati realizzati a mano
  square(0, 0, 48);
  square(0, 48, 48);
  square(0, 96, 48);
  // ...
  square(0, 480, 48);

  //analisi della colonna di quadrati di lato 48 
  //condizione iniziale y=0
  //condizione finale y<=480
  //istruzione di incremento y=y+48
  //blocco istruzioni: square(25, y, 50)

  //ciclo iterativo do-while
  fill(255, 0, 0);
  y = 0;
  do {
    square(50, y, 48);
    y = y + 48;
  } while (y <= 480);
  
  fill(0, 255, 0);
  // operazione di disegno dei triangoli realizzati a mano
  triangle(100, 0, 150, 0, 150, 36);
  triangle(100, 36, 150, 36, 150, 72);
  triangle(100, 72, 150, 72, 150, 108);
  triangle(100, 108, 150, 108, 150, 144);
  triangle(100, 144, 150, 144, 150, 180);
  // ...
  triangle(100, 360, 150, 360, 150, 36*11);
  

  //analisi della colonna di triangoli di base 50 e altezza 36 
  //condizione iniziale y=0
  //condizione finale y<=360
  //istruzione di incremento y=y+36
  //blocco istruzioni: triangle(100, y, 150, y, 150, y+36);

  //ciclo iterativo do-while
  fill(0, 255, 0);
  y = 0;
  do {
    triangle(150, y, 200, y, 200, y+36);
    y = y + 36;
  } while (y <= 360);
  
  fill(220, 100, 200);
  // operazione di disegno dei rettangoli realizzati a mano
  rect(200, 0, 80, 25);
  rect(200, 25, 80, 25);
  rect(200, 50, 80, 25);
  rect(200, 75, 80, 25);
  rect(200, 100, 80, 25);
  // ...
  rect(200, 975, 80, 25);


  //analisi della colonna di rettangoli di base 80 e altezza 25 
  //condizione iniziale y=0
  //condizione finale y<=975
  //istruzione di incremento y=y+25
  //blocco istruzioni: rect(200, y, 80, 25);

  //ciclo iterativo while
  fill(220, 100, 200);
  y = 0;
  while (y <= 975) {
    rect(280, y, 80, 25);
    y = y + 25;
  }
  
  /*
  
  // ciclo while
  y = 0;
  fill(220, 200, 100);
  while (y <= 1000) {
    ellipse(255, y, 50, 15);
    y = y + 15;
  }
  
  */
  
  saveCanvas(canvas, 'loops_different_shapes_exe_01', 'png');
  noLoop();
}
