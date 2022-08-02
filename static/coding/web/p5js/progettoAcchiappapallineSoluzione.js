// coordinata x di 20 palline
let pallinaX = [];
// coordinata y di 20 palline
let pallinaY = [];
// indice dell'array
let i;
// coordinata x della racchetta
let rectX;
// Punteggio
let score = 0;

function setup() {
  //coordinata x delle palline causale
  for(i=0;i<20;i++) {
    pallinaY[i]=Math.random() *-2000;
  }
  //coordinata y delle palline casuale
  for(i=0;i<20;i++) {
    pallinaX[i]=Math.random() *800;
  }
  createCanvas(800, 600);
}

function draw() {
  background (255,255,30);

  //Disegno le palline
  for(i=0;i<20;i++) {
    fill(0,45,255);
    circle(pallinaX[i],pallinaY[i],50);
  }

  //Spostamento della coordinata y delle palline
  for(i=0;i<20;i++) {
    pallinaY[i]=pallinaY[i]+1;
  }

  //movimento della racchetta
  rectX = mouseX-50;

  //se coordinata x dell'angolo in alto a sinistra della racchetta (rectX) è <=0
  // allora rectX è uguale a 0 (NON SUPERA IL BORDO SINISTRO)
  if (rectX <= 0) {
    rectX = 0;
  }

  //se coordinata y dell'angolo in alto a sinistra della racchetta (rectX) è >=720
  // allora rectX è uguale a 720 (NON SUPERA IL BORDO DESTRO)
  if (rectX >= 720) {
    rectX = 720;
  }

  //Se le palline toccano la racchetta (rectX) la pallina torna al suo punto iniziale
  for(i=0;i<20;i++) {
    if(pallinaY[i]>=525){
      if(pallinaX[i]<rectX+100 && pallinaX[i]>rectX ){
        pallinaY[i]=-100;
        score=score+1;
      }
    }
  }

  fill(255,0,255);
  rect(rectX,550,80,20);
  text("Punteggio: "+score,300,25);
}
