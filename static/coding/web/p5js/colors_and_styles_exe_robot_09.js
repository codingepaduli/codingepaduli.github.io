
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(250,128,114);
    // retta per la simmetria
    line(300, 0, 300, 400);

    //faccia

    //grandezza bordo
    strokeWeight(2);
    //colore bordo nero
    stroke(0, 0, 0);
    //antenna sinistra
    line(270, 30, 295, 50);
    //antenna destra
    line(330, 30, 305, 50);
    //colore di riempimento rosso
    fill(203,50,52);
    //rettangolo curvo base delle antenne
    rect(285, 50, 30, 20, 5);
    //orecchio sinistro
    rect(245, 95, 15, 15);
    //orechhio destro
    rect(340, 95, 15, 15);
    //colore di riempimento verde acqua
    fill(127,255,212);
    // il quadrato è la base della faccia
    square(260, 60, 80, 20);
    //colore di riempimento giallo
    fill(255,255,0);
    //occhio sinistro
    circle(280, 85, 25);
    //occhio destro
    circle(320, 85, 25);
    //bocca
    rect(290, 125, 20, 15);
    //colore di riempimento rosso
    fill(203,50,52);
    //naso
    triangle(300, 95, 290, 105, 310, 105);
    //collo
    rect(285, 140, 30, 15);

    //corpo

    //giuntura sinistra
    rect(240, 170, 30, 20,5);
    //giuntura destra
    rect(330, 170, 30, 20,5);
    //colore di riempimento verde acqua
    fill(127,255,212);
    //base del corpo
    rect(250, 155, 100, 90,5);

    //gambe
    //rettangolo
    rect(292, 245, 16, 30);
    //linea sinistra
    line(272, 260, 292, 260);
    //linea destra
    line(308, 260, 328, 260);
    //parte centrale della gamba sinistra
    rect(247, 265, 20, 80);
    //parte centrale della gamba destra
    rect(333, 265, 20, 80);
    //colore di riempimento rosso
    fill(203,50,52);
    //parte superiore della gamba sinistra
    rect(242, 253, 30, 15,3,0,0,3);
    //parte superiore della gamba destra
    rect(328, 253, 30, 15,0,3,3,0);
    //piede sinistro
    rect(242, 333, 30, 35);
    //piede destro
    rect(328, 333, 30, 35);

    //braccia
    //colore di riempimento verde acqua
    fill(127,255,212);
    //braccia sinistra
    rect(220,170,20,70,0,0,3,3);
    //braccia destra
    rect(360,170,20,70,0,0,3,3);
}
