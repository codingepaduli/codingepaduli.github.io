// coordinate linea di separazione del piano
// coordinata x relativa al primo punto della linea L1
let xPuntoL1 = 500;

// coordinata y relativa al primo punto della linea L1
let yPuntoL1 = 0;

// coordinata x2 relativa al secondo punto della linea L1
let x2PuntoL1 = 500;

// coordinata y2 relativa al secondo punto della linea L1
let y2PuntoL1 = 800;

// prima antenna del Robot
// coordinata x relativa al primo punto della linea L2
let xPuntoL2 = 480;

// coordinata y relativa al primo punto della linea L2
let yPuntoL2 = 80;

// coordinata x2 relativa al secondo punto della linea l2
let x2PuntoL2 = 480;

// coordinata y2 relativa al secondo punto della linea l2
let y2PuntoL2 = 130;

// seconda antenna del Robot
// coordinata x relativa al primo punto della linea L3
let xPuntoL3 = 520;

// coordinata y relativa al primo punto della linea L3
let yPuntoL3 = 80;

// coordinata x2 relativa al secondo punto della linea L3
let x2PuntoL3 = 520;

// coordinata y2 relativa al secondo punto della linea L3
let y2PuntoL3 = 130;

// coordinate cerchio sinistro per antenna sinistra del Robot
// coordinata x del cerchio C1
let xCerchio1 = 480;

// coordinata y del cerchio C1
let yCerchio1 = 80;

// diametro del cerchio C1
let diameterC1 = 10;

// coordinate cerchio destro per antenna destra del Robot
// coordinata x del cerchio C2
let xCerchio2 = 520;

// coordinata y del cerchio C2
let yCerchio2 = 80;

// diametro del cerchio C2
let diameterC2 = 10;

// coordinate testa del Robot
// coordinata x relativa all'angolo in alto a sinistra del quadrato
let angoloX = 455;

// coordinata y relativa all'angolo in alto a sinistra del quadrato
let angoloY = 130;

// dimensione del lato
let lato = 90;

// coordinate occhio sinistro del Robot
//coordinata x del cerchio C3
let xCerchio3 = 483;

// coordinata y del cerchio C3
let yCerchio3 = 150;

// diametro del cerchio C3
let diameter3 = 10;

// coordinate occhio destro del Robot
//coordinata x del cerchio C4
let xCerchio4 = 517;

// coordinata y del cerchio C4
let yCerchio4 = 150;

// diametro del cerchio C4
let diameter4 = 10;

// coordinate naso del Robot
// coordinata x del rettangolo R1
let xRettangolo1 = 490;

// coordinata y del rettangolo R1
let yRettangolo1 = 165;

// dimensione della base del rettangolo R1
let DimensionR1 = 20;

// dimensione h dell'altezza del rettangolo R1
let hDimensionR1 = 30;

//coordinate bocca del Robot
// coordinata x relativa al centro dell'ellisse E1
let xEllisse1 = 500;

// coordinata y relativa al centro dell'ellisse E1
let yEllisse1 = 207;

// dimensione l della larghezza dell'ellisse E1
let lEllisse1 = 20;

// dimensione h dell'altezza dell'ellisse E1
let hEllisse1 = 5;

// coordinate corpo del Robot
// coordinata x del rettangolo R2
let xRettangolo2 = 400;

// coordinata y del rettangolo R2
let yRettangolo2 = 220;

// dimensione della base del rettangolo R2
let DimensionR2 = 200;

// dimensione h dell'altezza del rettangolo R2
let hDimensionR2 = 250;

// coordinate gamba sinistra del Robot
// coordinata x del rettangolo R3
let xRettangolo3 = 425;

// coordinata y del rettangolo R3
let yRettangolo3 = 470;

// dimensione della base del rettangolo R3
let DimensionR3 = 25;

// dimensione h dell'altezza del rettangolo R3
let hDimensionR3 = 75;

// coordinate gamba destra del Robot
// coordinata x del rettangolo R4
let xRettangolo4 = 550;

// coordinata y del rettangolo R4
let yRettangolo4 = 470;

// dimensione della base del rettangolo R4
let DimensionR4 = 25;

// dimensione h dell'altezza del rettangolo R4
let hDimensionR4 = 75;

// coordinate braccio sinistro del Robot
// coordinata x del rettangolo R5
let xRettangolo5 = 375;

// coordinata y del rettangolo R5
let yRettangolo5 = 275;

// dimensione della base del rettangolo R5
let DimensionR5 = 25;

// dimensione h dell'altezza del rettangolo R5
let hDimensionR5 = 135;

// coordinate braccio destro del Robot
// coordinata x del rettangolo R6
let xRettangolo6 = 600;

// coordinata y del rettangolo R6
let yRettangolo6 = 275;

// dimensione della base del rettangolo R6
let DimensionR6 = 25;

// dimensione h dell'altezza del rettangolo R6
let hDimensionR6 = 135;

// coordinate piede sinistro del Robot
// coordinata x del rettangolo R7
let xRettangolo7 = 410;

// coordinata y del rettangolo R7
let yRettangolo7 = 545;

// dimensione della base del rettangolo R7
let DimensionR7 = 40;

// dimensione h dell'altezza del rettangolo R7
let hDimensionR7 = 20;

// coordinate piede destro del Robot
// coordinata x del rettangolo R8
let xRettangolo8 = 550;

// coordinata y del rettangolo R8
let yRettangolo8 = 545;

// dimensione della base del rettangolo R8
let DimensionR8 = 40;

// dimensione h dell'altezza del rettangolo R8
let hDimensionR8 = 20;

function setup() {
    createCanvas(1000, 800);
}

function draw() {
    background(163, 163, 163);

    line(xPuntoL1, yPuntoL1, x2PuntoL1, y2PuntoL1);

    // antenne del Robot
    line(xPuntoL2, yPuntoL2, x2PuntoL2, y2PuntoL2);
    line(xPuntoL3, yPuntoL3, x2PuntoL3, y2PuntoL3);

    // cerchi per antenne
    // colore rosso R G B
    fill(255, 0, 0);
    circle(xCerchio1, yCerchio1, diameterC1);
    circle(xCerchio2, yCerchio2, diameterC2);

    // testa del Robot
    // colore giallo R G B
    fill(255, 255, 0);
    square(angoloX, angoloY, lato);

    // occhi del Robot
    // colore nero R G B
    fill(0, 0, 0);
    circle(xCerchio3, yCerchio3, diameter3);
    circle(xCerchio4, yCerchio4, diameter4);

    // naso del Robot
    // colore marrone R G B
    fill(150, 75, 0);
    rect(xRettangolo1, yRettangolo1, DimensionR1, hDimensionR1);

    // bocca del Robot
    // colore rosa R G B
    fill(255, 192, 203);
    ellipse(xEllisse1, yEllisse1, lEllisse1, hEllisse1);

    // corpo del Robot
    // colore arancione R G B
    fill(255, 102, 0);
    rect(xRettangolo2, yRettangolo2, DimensionR2, hDimensionR2);

    // gambe del Robot
    // colore verde R G B
    fill(0, 255, 0);
    rect(xRettangolo3, yRettangolo3, DimensionR3, hDimensionR3);
    rect(xRettangolo4, yRettangolo4, DimensionR4, hDimensionR4);

    // braccia del Robot
    // colore verde R G B
    fill(0, 255, 0);
    rect(xRettangolo5, yRettangolo5, DimensionR5, hDimensionR5);
    rect(xRettangolo6, yRettangolo6, DimensionR6, hDimensionR6);

    // piedi del Robot
    // colore blu R G B
    fill(0, 0, 255);
    rect(xRettangolo7, yRettangolo7, DimensionR7, hDimensionR7);
    rect(xRettangolo8, yRettangolo8, DimensionR8, hDimensionR8);
}
