"use strict";
let X = 100;
let Y = 300;
let distanzaTraCerchi;
let dimensioneCatetoBase;
let dimensioneCatetoAltezza;

function setup() {
    "use strict";
    createCanvas(800, 600);
}

function draw() {
    "use strict";
    colorMode(HSB);
    background(255, 30, 255);
    textSize(20);
    text("Calcolo della distanza tra due punti", 100, 20);

    // Disegno del primo cerchio
    fill(120, 255, 255);
    circle(X, Y, 20);

    // Disegno del secondo cerchio
    fill(240, 255, 255);
    circle(mouseX, mouseY, 20);

    // Disegno del triangolo
    line(X, Y, mouseX, Y); // disegno la base (cateto)
    line(mouseX, Y, mouseX, mouseY); // disegno l'altezza (cateto)
    line(X, Y, mouseX, mouseY); // disegno l'ipotenusa

    // Disegno le etichette con le coordinate dei due punti
    text("p2(" + mouseX + ", " + mouseY + ")", mouseX+20, mouseY+20);
    text("p1(" + X + ", " + Y + ")", X+20, Y+20);

    // Disegno le etichette sui cateti e sull'ipotenusa
    text("b", X + (mouseX - X) / 2, Y - 10);
    text("h", mouseX+10, Y + (mouseY - Y) / 2);
    text("i", X + (mouseX - X) / 2, Y + (mouseY - Y) / 2);

    // Calcolo lunghezza del cateto "base"
    dimensioneCatetoBase = calcolaDistanza(X, Y, mouseX, Y);
    text("la base del triangolo è calcolata con | x2 - x1 | = " + dimensioneCatetoBase, 50, Y + Y/2);

    // Calcolo lunghezza del cateto "altezza"
    dimensioneCatetoAltezza = calcolaDistanza(mouseX, Y, mouseX, mouseY);
    text("l'altezza del triangolo è calcolata con | y2 - y1 | = " + dimensioneCatetoAltezza, 50, Y + Y/2 + 25);

    // Calcolo distanza tra cerchi
    distanzaTraCerchi = calcolaDistanza(X, Y, mouseX, mouseY);
    text("la distanza tra i due cerchi è " + distanzaTraCerchi, 50, Y + Y/2 + 50);
}

/* Calcolo della distanza tra due punti (x1, y1) ed (x2, y2)
    utilizzando il teorema di Pitagora.

    Il primo punto (x1, y1) indica l'inizio dell'ipotenusa.
    Il secondo punto (x2, y2) indica la fine dell'ipotenusa.

    Il valore restituito è la distanza tra i due punti
    che corrisponde alla lunghezza dell'ipotenusa.
*/
function calcolaDistanza(x1, y1, x2, y2) {
    "use strict";
    // calcolo la base del triangolo rettangolo
    let base = x2 - x1;
    // calcolo l'altezza del triangolo rettangolo
    let altezza = y2 - y1;
    // Calcolo la lunghezza dell'ipotenusa usando Pitagora
    let ipotenusa = Math.sqrt(base * base + altezza * altezza);
    return ipotenusa;
}
