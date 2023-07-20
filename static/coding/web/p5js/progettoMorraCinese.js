let SASSO = 1;
let CARTA = 2;
let FORBICI = 3;

let numeriDaScegliere=[SASSO, CARTA, FORBICI];

let sceltaUtente = 0;
let imgSceltaUtente;
let sceltaComputer = 0;
let imgSceltaComputer;

let cX, cY;

let imgRock, imgPaper, imgScissors;

function preload() {
    imgRock = loadImage('/static/coding/web/p5js/progettoMorraCinese_rock.jpeg');
    imgPaper = loadImage('/static/coding/web/p5js/progettoMorraCinese_paper.jpeg');
    imgScissors = loadImage('/static/coding/web/p5js/progettoMorraCinese_scissors.jpeg');
    
    soundFormats('mp3', 'wav');
}

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(255, 255, 0);

  // Immagini da scegliere (pannello laterale)
  image(imgRock, 25, 75, 100, 100);
  image(imgPaper, 25, 200, 100, 100);
  image(imgScissors, 25, 325, 100, 100);

  // scritta "scegli" (pannello laterale)
  fill('red');
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER, BASELINE); // Align the x center to 70
  text("scegli", 75, 50);
  
  // aspetto che l'utente sceglie (SASSO, CARTA, FORBICI)
  if (sceltaUtente != 0) {
    
    text("tu: " + sceltaUtente, 225, 50);
    image(imgSceltaUtente, 150, 75, 200, 200);
    
    text("computer: " + sceltaComputer, 450, 100);
    image(imgSceltaComputer, 350, 125, 200, 200);

    // Messaggio di vittoria, pareggio o sconfitta
    if (sceltaComputer == sceltaUtente) {
        text("PAREGGIO", 350, 400);
    }
    if (sceltaComputer==SASSO && sceltaUtente==CARTA) {
        text("ha vinto l'utente", 350, 400);
    }
    if (sceltaComputer==SASSO && sceltaUtente==FORBICI) {
        text("ha vinto il computer", 350, 400);
    }
    if (sceltaComputer==CARTA && sceltaUtente==SASSO) {
        text("ha vinto il computer", 350, 400);
    }
    if (sceltaComputer==CARTA && sceltaUtente==FORBICI) {
        text("ha vinto l'utente", 350, 400);
    }
    if (sceltaComputer==FORBICI && sceltaUtente==SASSO) {
        text("ha vinto l'utente", 350, 400);
    }
    if (sceltaComputer==FORBICI && sceltaUtente==CARTA) {
        text("ha vinto il computer", 350, 400);
    }
  }
  // text("c:" + cX + " " + cY, 150, 240);
}

function mousePressed() {
  cX = mouseX;
  cY = mouseY;

  // Gestisco la scelta utente (quando fa click)
  if (cX>=25 && cX<=125 && cY>=75 && cY<=175) {
    sceltaUtente = SASSO;
    imgSceltaUtente = imgRock;
  }
  if (cX>=25 && cX<=125 && cY>=200 && cY<=300) {
    sceltaUtente = CARTA;
    imgSceltaUtente = imgPaper;
  }
  if (cX>=25 && cX<=125 && cY>=325 && cY<=425) {
    sceltaUtente = FORBICI;
    imgSceltaUtente = imgScissors;
  }

  // Genero la risposta del computer
  sceltaComputer =  random(numeriDaScegliere);

  if (sceltaComputer == SASSO) {
    imgSceltaComputer = imgRock;
  }
  if (sceltaComputer == CARTA) {
    imgSceltaComputer = imgPaper;
  }
  if (sceltaComputer == FORBICI) {
    imgSceltaComputer = imgScissors;
  }
}




