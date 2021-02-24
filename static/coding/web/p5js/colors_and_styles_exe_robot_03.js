function setup() {
    createCanvas(400, 400);
}

function draw() {
    // Colore dello sfondo
    background(150, 249, 32);
    // Colore bordi
    stroke(0, 0, 0);
    // Grandezza dei bordi
    strokeWeight(1.5);
    // Colore azzurro scuro
    fill(0, 127, 255);
    // Linea di simmetria
    line(200, 0, 200, 400);
    // Testa del robot
    circle(200, 87, 57);
    // Antenna sinistra del robot
    line(190, 10, 190, 60);
    // Antenna destra del robot
    line(210, 10, 210, 60);
    // Collo del robot
    rect(180, 116, 40, 10, 5);
    // Corpo del robot
    rect(150, 127, 100, 90, 25);
    // Colore grigio
    fill(210, 210, 210);
    // Ruota sinistra del robot
    circle(170, 241, 50);
    // Ruota destra del robot
    circle(230, 241, 50);
    // Colore azzurro scuro
    fill(0, 127, 255);
    // Parte superiore del braccio sinistro
    rect(100, 150, 50, 20, 5);
    // Parte superiore del braccio destro
    rect(250, 150, 50, 20, 5);
    // Parte inferiore del braccio sinistro
    rect(100, 170, 20, 30, 5);
    // Parte inferiore del braccio destro
    rect(280, 170, 20, 30, 5);
    // Colore grigio
    fill(210, 210, 210);
    // Mano sinistra del robot
    circle(110, 210, 20);
    // Mano destra del robot
    circle(290, 210, 20);
    // Colore bianco
    fill(255, 255, 255);
    // Occhio del robot sinistro
    circle(190, 80, 15);
    // Occhio del robot destro
    circle(210, 80, 15);
    // Colore nero
    fill(0, 0, 0);
    // Naso del robot
    rect(197.5, 90, 5, 10);
    // Bocca del robot
    rect(195, 105, 10, 5);
    // Colore bianco
    fill(255, 255, 255);
    // Pallina sull'antenna sinistra del robot
    circle(190, 10, 10);
    // Pallina sull'antenna destra del robot
    circle(210, 10, 10);
    // Colore nero
    fill(0, 0, 0);
    // Pupilla sinistra dell'occhio del robot
    circle(190, 80, 4);
    // Pupilla destra dell'occhio del robot
    circle(210, 80, 4);
}
