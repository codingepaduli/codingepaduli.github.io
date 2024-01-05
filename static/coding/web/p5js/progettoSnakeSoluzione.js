//array per memorizzare le coordinate X e Y di ogni pallina
let snakeX = [];
let snakeY = [];

//posizione della testa dello snake
//il valore -1 indica che la testa non è presente
let posTestaSnake = -1;

let raggio = 50;

function creaSnake(snakeX, snakeY) {
    //posizione prima pallina dello snake
    posTestaSnake = 0;
    snakeX[0] = 100;
    snakeY[0] = 700;

    //posizione seconda pallina dello snake
    posTestaSnake = 1;
    snakeX[1] = 100 + raggio;
    snakeY[1] = 700;

    //posizione terza pallina dello snake
    posTestaSnake = 2;
    snakeX[2] = 100 + raggio;
    snakeY[2] = 700 - raggio;

    //posizione quarta pallina dello snake
    posTestaSnake = 3;
    snakeX[3] = 100 + raggio * 2;
    snakeY[3] = 700 - raggio;

    //posizione quinta pallina dello snake
    posTestaSnake = 4;
    snakeX[4] = 100 + raggio * 2;
    snakeY[4] = 700 - raggio * 2;

    //posizione sesta pallina dello snake
    posTestaSnake = 5;
    snakeX[5] = 100 + raggio * 2;
    snakeY[5] = 700 - raggio * 3;

    //posizione settima pallina dello snake
    posTestaSnake = 6;
    snakeX[6] = 100 + raggio * 2;
    snakeY[6] = 700 - raggio * 4;

    //posizione ottava pallina dello snake
    posTestaSnake = 7;
    snakeX[7] = 100 + raggio * 2;
    snakeY[7] = 700 - raggio * 5;

    //posizione nona pallina dello snake
    posTestaSnake = 8;
    snakeX[8] = 100 + raggio * 3;
    snakeY[8] = 700 - raggio * 5;

    //posizione decima pallina dello snake
    posTestaSnake = 9;
    snakeX[9] = 100 + raggio * 4;
    snakeY[9] = 700 - raggio * 5;

    //posizione undicesima pallina dello snake
    posTestaSnake = 10;
    snakeX[10] = 100 + raggio * 4;
    snakeY[10] = 700 - raggio * 6;

    //posizione dodicesima pallina dello snake
    posTestaSnake = 11;
    snakeX[11] = 100 + raggio * 5;
    snakeY[11] = 700 - raggio * 6;

    //posizione tredicesima pallina dello snake
    posTestaSnake = 12;
    snakeX[12] = 100 + raggio * 5;
    snakeY[12] = 700 - raggio * 7;

    //posizione quattordicesima pallina dello snake
    posTestaSnake = 13;
    snakeX[13] = 100 + raggio * 5;
    snakeY[13] = 700 - raggio * 8;

    //posizione quindicesima pallina dello snake
    posTestaSnake = 14;
    snakeX[14] = 100 + raggio * 4;
    snakeY[14] = 700 - raggio * 8;

    //posizione sedicesima pallina dello snake
    posTestaSnake = 15;
    snakeX[15] = 100 + raggio * 3;
    snakeY[15] = 700 - raggio * 8;

    //posizione diciassettesima pallina dello snake
    posTestaSnake = 16;
    snakeX[16] = 100 + raggio * 2;
    snakeY[16] = 700 - raggio * 8;

    //posizione diciottesima pallina dello snake
    posTestaSnake = 17;
    snakeX[17] = 100 + raggio * 2;
    snakeY[17] = 700 - raggio * 9;

    //posizione diciannovesima pallina dello snake
    posTestaSnake = 18;
    snakeX[18] = 100 + raggio * 2;
    snakeY[18] = 700 - raggio * 10;

    //posizione ventesima pallina dello snake
    posTestaSnake = 19;
    snakeX[19] = 100 + raggio * 2;
    snakeY[19] = 700 - raggio * 11;

    //posizione ventunesima pallina dello snake
    posTestaSnake = 20;
    snakeX[20] = 100 + raggio * 2;
    snakeY[20] = 700 - raggio * 12;

    //posizione ventiduesima pallina dello snake
    posTestaSnake = 21;
    snakeX[21] = 100 + raggio * 2;
    snakeY[21] = 700 - raggio * 13;

    //posizione ventitreesima pallina dello snake
    posTestaSnake = 22;
    snakeX[22] = 100 + raggio;
    snakeY[22] = 700 - raggio * 13;

    //posizione ventiquattresima pallina dello snake
    posTestaSnake = 23;
    snakeX[23] = 100;
    snakeY[23] = 700 - raggio * 13;

    //posizione venticinquesima pallina dello snake
    posTestaSnake = 24;
    snakeX[24] = 100;
    snakeY[24] = 700 - raggio * 12;

    //posizione ventiseiesima pallina dello snake
    posTestaSnake = 25;
    snakeX[25] = 100;
    snakeY[25] = 700 - raggio * 11;

    //posizione ventisettesima pallina dello snake
    posTestaSnake = 26;
    snakeX[26] = 100;
    snakeY[26] = 700 - raggio * 10;

    //posizione ventottesima pallina dello snake
    posTestaSnake = 27;
    snakeX[27] = 100 - raggio;
    snakeY[27] = 700 - raggio * 10;

    //posizione ventinovesima pallina dello snake
    posTestaSnake = 28;
    snakeX[28] = 100 - raggio;
    snakeY[28] = 700 - raggio * 9;

    //posizione trentesima pallina dello snake
    posTestaSnake = 29;
    snakeX[29] = 100 - raggio;
    snakeY[29] = 700 - raggio * 8;

    //posizione trentunesima pallina dello snake
    posTestaSnake = 30;
    snakeX[30] = 100 - raggio;
    snakeY[30] = 700 - raggio * 7;

    //posizione trentadueesima pallina dello snake
    posTestaSnake = 31;
    snakeX[31] = 100;
    snakeY[31] = 700 - raggio * 7;

    //posizione trentatreesima pallina dello snake
    posTestaSnake = 32;
    snakeX[32] = 100;
    snakeY[32] = 700 - raggio * 6;

    //posizione trentaquattresima pallina dello snake
    posTestaSnake = 33;
    snakeX[33] = 100;
    snakeY[33] = 700 - raggio * 5;

    //posizione trentacinquesima pallina dello snake
    posTestaSnake = 34;
    snakeX[34] = 100;
    snakeY[34] = 700 - raggio * 4;

    //posizione trentaseiesima pallina dello snake
    posTestaSnake = 35;
    snakeX[35] = 100;
    snakeY[35] = 700 - raggio * 3;

    //posizione trentasettesima pallina dello snake
    posTestaSnake = 36;
    snakeX[36] = 100 - raggio;
    snakeY[36] = 700 - raggio * 3;

    //posizione trentottesima pallina dello snake
    posTestaSnake = 37;
    snakeX[37] = 100 - raggio * 2;
    snakeY[37] = 700 - raggio * 3;

    //posizione trentanovesima pallina dello snake
    posTestaSnake = 38;
    snakeX[38] = 100 - raggio * 2;
    snakeY[38] = 700 - raggio * 2;

    //posizione quarantesima pallina dello snake
    posTestaSnake = 39;
    snakeX[39] = 100 - raggio * 2;
    snakeY[39] = 700 - raggio;

    //posizione quarantunesima pallina dello snake
    posTestaSnake = 40;
    snakeX[40] = 100 - raggio * 2;
    snakeY[40] = 700;

    //posizione quarantadueesima pallina dello snake
    posTestaSnake = 41;
    snakeX[41] = 100 - raggio * 2;
    snakeY[41] = 700 + raggio;

    //posizione quarantatreesima pallina dello snake
    posTestaSnake = 42;
    snakeX[42] = 100 - raggio * 2;
    snakeY[42] = 700 + raggio * 2;

    //posizione quarantaquattresima pallina dello snake
    posTestaSnake = 43;
    snakeX[43] = 100 - raggio;
    snakeY[43] = 700 + raggio * 2;

    //posizione quarantaquattresima pallina dello snake
    posTestaSnake = 43;
    snakeX[43] = 100 - raggio;
    snakeY[43] = 700 + raggio * 2;

    //posizione quarantacinquesima pallina dello snake
    posTestaSnake = 44;
    snakeX[44] = 100;
    snakeY[44] = 700 + raggio * 2;

    //posizione quarantaseiesima pallina dello snake
    posTestaSnake = 45;
    snakeX[45] = 100;
    snakeY[45] = 700 + raggio * 3;

    //posizione quarantasettesima pallina dello snake
    posTestaSnake = 46;
    snakeX[46] = 100 + raggio;
    snakeY[46] = 700 + raggio * 3;

    //posizione quarantottesima pallina dello snake
    posTestaSnake = 47;
    snakeX[47] = 100 + raggio * 2;
    snakeY[47] = 700 + raggio * 3;

    //posizione quarantanovesima pallina dello snake
    posTestaSnake = 48;
    snakeX[48] = 100 + raggio * 2;
    snakeY[48] = 700 + raggio * 2;

    //posizione cinquantesima pallina dello snake
    posTestaSnake = 49;
    snakeX[49] = 100 + raggio * 2;
    snakeY[49] = 700 + raggio;

    //posizione cinquantunesima pallina dello snake
    posTestaSnake = 50;
    snakeX[50] = 100 + raggio * 2;
    snakeY[50] = 700;

    return posTestaSnake;
}

function disegnaSnake(snakeX, snakeY) {

    //indice per il ciclo for
    let indice1 = 0;

    //indice per il ciclo while
    let indice2 = 0;

    //indice per il ciclo do-while
    let indice3 = 0;

    // contorno cerchi
    stroke('black');
    strokeWeight(1);


    /********************************************************/
    // Analisi ciclo for:
    // condizione iniziale: indice1=0
    // condizione finale: indice1<=4
    // istruzione di incremento: indice1=indice1+1
    // blocco istruzioni: circle(snakeX[indice1], snakeY[indice1], raggio);
    /********************************************************/
    // ciclo for
    fill(255, 0, 0);
    for (indice1 = 0; indice1 <= 4; indice1 = indice1 + 1) {
        circle(snakeX[indice1], snakeY[indice1], raggio);
    }


    /********************************************************/
    // Analisi ciclo while:
    // condizione iniziale: indice2=5
    // condizione finale: indice2<=9
    // istruzione di incremento: indice2=indice2+1
    // blocco istruzioni: circle(snakeX[indice2], snakeY[indice2], raggio);
    /********************************************************/
    // ciclo while
    indice2 = 5;
    fill(0, 255, 0);
    while (indice2 <= 9) {
        circle(snakeX[indice2], snakeY[indice2], raggio);
        indice2 = indice2 + 1;
    }


    /********************************************************/
    // Analisi ciclo do-while:
    // condizione iniziale: indice3=10
    // condizione finale: indice3<=14
    // istruzione di incremento: indice3=indice3+1
    // blocco istruzioni: circle(snakeX[indice3], snakeY[indice3], raggio);
    /********************************************************/
    // ciclo do-while
    indice3 = 10;
    fill(0, 0, 255);
    do {
        circle(snakeX[indice3], snakeY[indice3], raggio);
        indice3 = indice3 + 1;
    } while (indice3 <= 14);


    /********************************************************/
    // Analisi ciclo for:
    // condizione iniziale: indice1=15
    // condizione finale: indice1<=19
    // istruzione di incremento: indice1=indice1+1
    // blocco istruzioni: circle(snakeX[indice1], snakeY[indice1], raggio);
    /********************************************************/
    // ciclo for
    fill(255, 0, 0);
    for (indice1 = 15; indice1 <= 19; indice1 = indice1 + 1) {
        circle(snakeX[indice1], snakeY[indice1], raggio);
    }


    /********************************************************/
    // Analisi ciclo while:
    // condizione iniziale: indice2=20
    // condizione finale: indice2<=24
    // istruzione di incremento: indice2=indice2+1
    // blocco istruzioni: circle(snakeX[indice2], snakeY[indice2], raggio);
    /********************************************************/
    // ciclo while
    indice2 = 20;
    fill(0, 255, 0);
    while (indice2 <= 24) {
        circle(snakeX[indice2], snakeY[indice2], raggio);
        indice2 = indice2 + 1;
    }


    /********************************************************/
    // Analisi ciclo do-while:
    // condizione iniziale: indice3=25
    // condizione finale: indice3<=29
    // istruzione di incremento: indice3=indice3+1
    // blocco istruzioni: circle(snakeX[indice3], snakeY[indice3], raggio);
    /********************************************************/
    // ciclo do-while
    indice3 = 25;
    fill(0, 0, 255);
    do {
        circle(snakeX[indice3], snakeY[indice3], raggio);
        indice3 = indice3 + 1;
    } while (indice3 <= 29);


    /********************************************************/
    // Analisi ciclo for:
    // condizione iniziale: indice1=30
    // condizione finale: indice1<=34
    // istruzione di incremento: indice1=indice1+1
    // blocco istruzioni: circle(snakeX[indice1], snakeY[indice1], raggio);
    /********************************************************/
    // ciclo for
    fill(255, 0, 0);
    for (indice1 = 30; indice1 <= 34; indice1 = indice1 + 1) {
        circle(snakeX[indice1], snakeY[indice1], raggio);
    }


    /********************************************************/
    // Analisi ciclo while:
    // condizione iniziale: indice2=35
    // condizione finale: indice2<=39
    // istruzione di incremento: indice2=indice2+1
    // blocco istruzioni: circle(snakeX[indice2], snakeY[indice2], raggio);
    /********************************************************/
    // ciclo while
    indice2 = 35;
    fill(0, 255, 0);
    while (indice2 <= 39) {
        circle(snakeX[indice2], snakeY[indice2], raggio);
        indice2 = indice2 + 1;
    }


    /********************************************************/
    // Analisi ciclo do-while:
    // condizione iniziale: indice3=40
    // condizione finale: indice3<=44
    // istruzione di incremento: indice3=indice3+1
    // blocco istruzioni: circle(snakeX[indice3], snakeY[indice3], raggio);
    /********************************************************/
    // ciclo do-while
    indice3 = 40;
    fill(0, 0, 255);
    do {
        circle(snakeX[indice3], snakeY[indice3], raggio);
        indice3 = indice3 + 1;
    } while (indice3 <= 44);


    /********************************************************/
    // Analisi ciclo for:
    // condizione iniziale: indice1=45
    // condizione finale: indice1<=50
    // istruzione di incremento: indice1=indice1+1
    // blocco istruzioni: circle(snakeX[indice1], snakeY[indice1], raggio);
    // la condizione finale è 50 e non 49 perché ho disegnato 6 palline e non 5
    /********************************************************/
    // ciclo for
    fill(0, 255, 0);
    for (indice1 = 45; indice1 < snakeX.length; indice1 = indice1 + 1) {
        circle(snakeX[indice1], snakeY[indice1], raggio);
    }
    noStroke();
}

/**
 * Controlla se la testa dello snake, che si trova in snakeX[snakeX.length - 1]
 * colpisce un qualsiasi altro elemento dello snake, rappresentato da snakeX[i].
 */
function finale(snakeX, snakeY) {
    //variabile utilizzata per concludere il gioco
    let end = false;
    //ciclo FOR per far bloccare il gioco quando lo snake colpirà il proprio corpo

    //ISTRUZIONI
    //condizione iniziale : i=0
    //condizione finale : i<snakeX.lenght - 2
    //condizione di incremento : 1++

    //SINTASSI
    //utilizzeremo un ciclo FOR = (i = 0; i < snakeX.length - 2; i++)
    for (let i = 0; i < snakeX.length - 2; i++) {
        if (snakeX[snakeX.length - 1] == snakeX[i] && snakeY[snakeY.length - 1] == snakeY[i]) {
            end = true;
        }
    }

    return end;
}

/**
 * Aggiunge una pallina in testa allo snake nella direzione scelta dall'utente.
 */
function scegliTasto(snakeX, snakeY, tasto) {

    switch (tasto) {
        case "ArrowUp":
            //aggiunta testa dello snake
            snakeX[snakeX.length] = snakeX[snakeX.length - 1];
            snakeY[snakeY.length] = snakeY[snakeY.length - 1] - raggio;
            break;

        case "ArrowDown":
            //aggiunta testa dello snake
            snakeX[snakeX.length] = snakeX[snakeX.length - 1];
            snakeY[snakeY.length] = snakeY[snakeY.length - 1] + raggio;
            break;

        case "ArrowRight":
            //aggiunta testa dello snake
            snakeX[snakeX.length] = snakeX[snakeX.length - 1] + raggio;
            snakeY[snakeY.length] = snakeY[snakeY.length - 1];
            break;

        case "ArrowLeft":
            //aggiunta testa dello snake
            snakeX[snakeX.length] = snakeX[snakeX.length - 1] - raggio;
            snakeY[snakeY.length] = snakeY[snakeY.length - 1];
            break;

        default:
            break;
    }
    return posTestaSnake;
}

//variabili delle mele casuali
let iCasuale = 0;
let jCasuale = 0;

//tasto precedente e corrente utilizzati per muovere il serpente
let tastoPrecedente = '';
let tastoCorrente = '';

//variabile utilizzata per il game over
let end = false;

//posizione mela
let melaX = 150;
let melaY = 400;

//max posizioni
let maxPosX;
let maxPosY;

function preload() {
    console.info("displayWidth / displayHeight: " + displayWidth + " " + displayHeight);
    console.info("windowWidth / windowHeight: " + windowWidth + " " + windowHeight);
    console.info("pixelDensity: " + pixelDensity());
}

function setup() {
    let canvasNode = document.querySelector('#progettoSnake');
    let cw = Math.floor(canvasNode.parentNode.clientWidth * 0.9);
    let ch = Math.floor(windowHeight * 0.8);
    createCanvas(cw, ch).parent('progettoSnake');
    console.debug(`width: ${cw}, height: ${ch}`);


    creaSnake(snakeX, snakeY);

    // massima posizione visibile X e Y
    maxPosX = Math.floor(cw / 50);
    maxPosY = Math.floor(ch / 50);

    // utilizzato per lo spawn casuale delle mele
    iCasuale = Math.floor(Math.random() * maxPosX);
    jCasuale = Math.floor(Math.random() * maxPosY);
    console.debug(`iCasuale: ${iCasuale}, jCasuale: ${jCasuale}`);

}


function draw() {

    frameRate(10);
    background(176, 224, 230);

    disegnaSnake(snakeX, snakeY);

    melaX = 50 * iCasuale;
    melaY = 50 * jCasuale;

    fill(255, 0, 0);
    circle(melaX, melaY, 25);

    //tasti premuti dall'utente
    tastoPrecedente = tastoCorrente;
    tastoCorrente = key;

    scegliTasto(snakeX, snakeY, tastoCorrente, tastoPrecedente);

    //condizione if per far bloccare lo snake ad inizio gioco
    if (tastoCorrente != '')
        if (snakeX[snakeX.length - 1] == melaX && snakeY[snakeY.length - 1] == melaY) {
            iCasuale = Math.floor(Math.random() * maxPosX);
            jCasuale = Math.floor(Math.random() * maxPosY);
            console.debug(`iCasuale: ${iCasuale}, jCasuale: ${jCasuale}`);

        } else {
            //tolgo il primo elemnto dagli array
            snakeX.shift();
            snakeY.shift();
        }

    //richiamata funzione per la fine dello snake
    end = finale(snakeX, snakeY);

    //scritta game over
    if (end) {
        textSize(150);
        fill(255, 255, 0);
        text("GAME OVER", 170, 450);
        noLoop();
    }
    //console per visualizzare che la dimensione dello snake stia aumentando
    console.info("Snake di lunghezza " + snakeX.length);

    drawFullScreenRect();
}


function drawFullScreenRect() {
  // fullscreen rectangle
  push();

  textSize(10);
  //text(" " + mouseX + " " + mouseY, width - 100, height - 70);

  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);

  rectMode(CORNER);
  square(width - 60, height - 60, 30);
  pop();
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    if (!document.fullscreenElement) {
      let canvasNode = document.querySelector('#progettoSnake canvas');
      canvasNode.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
