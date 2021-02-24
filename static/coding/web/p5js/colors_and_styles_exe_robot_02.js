function setup() {
    createCanvas(400, 500);
}

function draw() {
    background(255, 255, 255);
    //asse di simmetria
    stroke(0, 0, 0);
    strokeWeight(2);
    line(200, 0, 200, 500);
    //testa
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    triangle(200, 140, 250, 75, 150, 75);
    //antenne
    //antenna destra
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    triangle(225, 60, 235, 75, 215, 75);
    stroke(0, 0, 0);
    strokeWeight(3);
    line(225, 60, 225, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(4);
    circle(225, 15, 10);
    //antenna sinistra
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    triangle(175, 60, 185, 75, 165, 75);
    stroke(0, 0, 0);
    strokeWeight(3);
    line(175, 60, 175, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(4);
    circle(175, 15, 10);
    //faccia
    //bocca
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(185, 110, 30, 5);
    stroke(0, 127, 255);
    strokeWeight(2);
    line(193, 110, 193, 115);
    line(197, 110, 197, 115);
    line(201, 110, 201, 115);
    line(205, 110, 205, 115);
    line(209, 110, 209, 115);
    //occhi
    //occhio destro
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);
    circle(225, 90, 15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    circle(225, 90, 2);
    //occhio sinistro
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);
    circle(175, 90, 15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    circle(175, 90, 2);
    //naso
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);
    circle(200, 95, 15);
    circle(200, 95, 10);
    circle(200, 95, 2);
    //collo
    stroke(0, 127, 255);
    strokeWeight(2);
    line(196, 142, 204, 142);
    line(196, 146, 204, 146);
    line(196, 150, 204, 150);
    line(196, 154, 204, 154);
    //corpo
    //busto
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    rect(135, 158, 130, 130);
    //cravatta
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    triangle(200, 178, 215, 158, 185, 158);
    quad(200, 178, 224, 218, 200, 258, 175, 218);
    //braccia
    //braccio destro
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    line(265, 163, 270, 163);
    line(265, 168, 270, 168);
    rect(270, 158, 15, 15);
    rect(285, 158, 25, 110);
    //mano destra
    stroke(0, 127, 255);
    strokeWeight(3);
    line(295, 268, 295, 278);
    line(301, 268, 301, 278);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(298, 300, 50);
    //braccio sinistro
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    line(135, 163, 130, 163);
    line(135, 168, 130, 168);
    rect(115, 158, 15, 15);
    rect(90, 158, 25, 110);
    //mano sinistra
    stroke(0, 127, 255);
    strokeWeight(3);
    line(99, 268, 99, 278);
    line(105, 268, 105, 278);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(102, 300, 50);
    //gambe
    //gamba sinistra
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    rect(150, 290, 25, 130);
    //gamba destra
    fill(0, 127, 255);
    stroke(0, 127, 255);
    strokeWeight(3);
    rect(225, 290, 25, 130);
    //rotelle
    //rotella sinistra
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    quad(150, 420, 175, 420, 190, 435, 135, 435);
    stroke(0, 127, 255);
    strokeWeight(3);
    line(162, 435, 162, 445);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    circle(162, 465, 40);
    fill(95, 95, 95);
    circle(162, 465, 20);
    fill(0, 0, 0);
    circle(162, 465, 2);
    //rotella destra
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    quad(225, 420, 250, 420, 265, 435, 210, 435);
    stroke(0, 127, 255);
    strokeWeight(3);
    line(237, 435, 237, 445);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    circle(237, 465, 40);
    fill(95, 95, 95);
    circle(237, 465, 20);
    fill(0, 0, 0);
    circle(237, 465, 2);
}
