function setup() {
    createCanvas(700, 800);
}

function draw() {
    colorMode(RGB);
    background(255, 255, 0); //imposto lo sfondo come colore giallo
    strokeWeight(2); //imposto il bordo a 2 px
    line(350, 0, 350, 800);
    fill(255, 0, 0); //coloro il rettangolo di rosso
    rect(250, 80, 200, 160);
    fill(255, 255, 0); //coloro i cerchi di giallo
    triangle(290, 100, 265, 145, 315, 145);
    triangle(410, 100, 385, 145, 435, 145);
    circle(290, 126, 10);
    circle(410, 126, 10);
    strokeWeight(4); //imposto il bordo a 4 px
    point(290, 126);
    point(410, 126);
    strokeWeight(2);
    fill(255, 140, 0); //coloro il secondo rettangolo di arancione
    rect(340, 145, 20, 35);
    fill(0, 175, 255); //coloro l'ellisse di blu chiaro
    arc(350, 197, 67, 67, TWO_PI, PI);
    line(318, 197, 383, 197);
    line(400, 80, 450, 20);
    line(300, 80, 250, 20);
    circle(250, 20, 10);
    circle(450, 20, 10);
    fill(0, 250, 255); //coloro il terzo rettangolo di blu acqua
    rect(337, 240, 25, 50);
    fill(0, 0, 255); //coloro il quadrato di blu
    square(237, 290, 225);
    fill(110, 250, 100); //coloro i rettangoli di verde chiaro
    rect(462, 340, 150, 25);
    rect(87, 340, 150, 25);
    rect(285, 515, 30, 170);
    rect(385, 515, 30, 170);
    fill(255, 250, 100); //coloro i cerchi di giallo ocra
    circle(600, 350, 50);
    circle(100, 350, 50);
    circle(300, 695, 50);
    circle(400, 695, 50);
}
