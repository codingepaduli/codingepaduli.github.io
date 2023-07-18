let SASSO = 1;
let CARTA = 2;
let FORBICI = 3;

let img;
let sceltaComputer;
let numeriDaScegliere=[1, 2, 3];
let sceltaUtente = 0;

let cX, cY;

function preload() {
  img = loadImage('https://play-lh.googleusercontent.com/m_CFCedgx9NDksGgn3yiNWkdRhEYECd3wQ5OUQEXoHcUIaJmY4DjOZ7OaogemgyOc6Y=w240-h480-rw');
  
}

function setup() {
  createCanvas(200, 250);
  sceltaComputer =  random(numeriDaScegliere);
}

function draw() {
  background(255,255,0);
  text("punteggio",120,10);

  text("scegli cosa tirare",15,80);
  image(img, 30, 85,120,120);
  
  text("scelta dell'utente",15,220);
  text(sceltaUtente,110,220);
  
  // aspetto che l'utente sceglie (1 o 2 o 3)
  if (sceltaUtente != 0) {
    
    text("scelta del computer",15,50);
    text(sceltaComputer,25,60)

    
    if(sceltaComputer == sceltaUtente){
        text("PAREGGIO",15,240);
    }

    if(sceltaComputer==SASSO && sceltaUtente==CARTA){
        text("ha vinto l'utente",15,240);
    }
    if(sceltaComputer==SASSO && sceltaUtente==FORBICI){
        text("ha vinto il computer",15,240);
    }
    if(sceltaComputer==CARTA && sceltaUtente==SASSO){
        text("ha vinto il computer",15,240);
    }
    if(sceltaComputer==CARTA && sceltaUtente==FORBICI){
        text("ha vinto l'utente",15,240);
    }
    if(sceltaComputer==FORBICI && sceltaUtente==SASSO){
        text("ha vinto l'utente",15,240);
    }
    if(sceltaComputer==FORBICI && sceltaUtente==CARTA){
        text("ha vinto il computer",15,240);
    }
  }
   text("c:" + cX + " " + cY, 150, 240);
}

function mousePressed() {
  cX = mouseX;
  cY = mouseY;
  if(cX>=53 && cX<=95 && cY>=63 && cY<=131){
    sceltaUtente =SASSO;
  }
  if(cX>=53 && cX<=96 && cY>=140 && cY<=178){
    sceltaUtente =FORBICI;
  }
  if(cX>=100 && cX<=140 && cY>=140 && cY<=178){
    sceltaUtente =CARTA;
  }

}




