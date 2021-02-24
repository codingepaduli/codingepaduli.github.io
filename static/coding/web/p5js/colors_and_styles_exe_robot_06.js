function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(60, 182, 142);

    //BISETTRICE
    line(350, 0, 350, 700);

    //inserisco un triangolo che sarebbe la testa del robot

    fill(13, 41, 205);
    triangle(240, 180, 350, 10, 460, 180);

    //inserisco le linee del collo

    line(320, 180, 320, 200);
    line(380, 180, 380, 200);

    //in questo passaggio si inserisce l'eventuale naso del robot

    fill(255, 35, 0);
    circle(350, 110, 20);

    //l'arco rappresenta la bocca del robot

    fill(255, 35, 0);
    arc(350, 150, 80, 30, PI, TWO_PI);

    //si inseriscono gli occhi del robot (i triangoli ed i punti)

    fill(255, 35, 0);
    triangle(320, 70, 330, 90, 340, 70);
    triangle(360, 70, 370, 90, 380, 70);
    point(329, 77);
    point(370, 77);

    //qui sono state inserite le antenne del robot con 2 linee e 2 cerchi.

    fill(255, 35, 0);
    line(310, 70, 300, 30);
    line(390, 70, 400, 30);
    circle(297, 20, 20);
    circle(402, 20, 20);

    //adesso si inserisce il rettangolo collegato alle due linee che rappresenta il corpo del robot0);

    fill(106, 213, 228);
    rect(220, 200, 260, 300);

    //ho inserito le braccia con apposite mani  e dita

    fill(224, 0, 193);
    rect(50, 270, 170, 20);
    rect(50, 290, 25, 100);
    line(55, 390, 55, 400);
    line(70, 390, 70, 400);
    circle(63, 407, 30);
    line(53, 418, 45, 430);
    line(63, 422, 63, 435);
    line(73, 418, 81, 430);
    fill(224, 0, 193);
    rect(480, 270, 170, 20);
    rect(625, 290, 25, 100);
    line(630, 390, 630, 400);
    line(645, 390, 645, 400);
    circle(637, 407, 30);
    line(626, 418, 619, 430);
    line(637, 422, 637, 435);
    line(647, 418, 655, 430);

    //ho inserito la parte inferiore del corpo che sarebbero le gambe del robot e le ruote come piedi. prima le 2 gambe.. poi per la prima gamba le ruote(piedi) con apposite linee, poi lo stesso per la seconda gamba


    fill(255, 14, 111);
    rect(260, 500, 30, 150);
    fill(255, 14, 111);
    rect(410, 500, 30, 150);
    line(415, 650, 415, 663);
    line(435, 650, 435, 663);
    fill(200, 150, 255);
    circle(425, 670, 30);
    line(425, 675, 425, 685);
    line(415, 680, 420, 670);
    line(435, 680, 430, 670);
    line(265, 650, 265, 660);
    line(285, 650, 285, 660);
    fill(200, 150, 255);
    circle(275, 670, 30);
    line(270, 670, 265, 680);
    line(275, 685, 275, 675);
    line(285, 680, 280, 670);

    //ho inserito il bordo ed il colore del bordo del robot
    strokeWeight(5);
    stroke(0, 0, 150);
}
