function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255,255,0);
    line(200,0,200,400);
    // linea di simmetria
    fill(128,0,128);
    circle(200,100,70);
    fill(227,11,92);
    circle(200,100,50);
    //testa
    fill(128,0,128);
    circle(180,100,10);
    circle(220,100,10);
    //occhi
    line(160,45,180,73);
    circle(160,45,8);
    line(240,45,220,73);
    circle(240,45,8);
    //antenne
    arc(165,100,10,10,HALF_PI,4.8,OPEN);
    arc(235,100,10,10,4.8,HALF_PI,OPEN);
    //orecchie
    triangle(200,100,190,105,210,105);
    //becco
    rect(190,135,20,10);
    //collo
    fill(128,0,128);
    rect(160,140,80,75,15);
    fill(227,11,92);
    rect(175,152.5,50,50,15);
    //parte superiore del corpo
    square(145,150,15,5);
    square(240,150,15,5);
    fill(49,0,98);
    rect(137,150,8.5,15);
    fill(210,105,30);
    arc(136.5,157.5,15,15,HALF_PI,4.80);
    fill(49,0,98);
    rect(254.5,150,8.5,15);
    fill(210,105,30);
    arc(263.5,157.5,15,15,4.80,HALF_PI);
    //spalle
    fill(227,11,92);
    rect(137,165,10,60);
    fill(49,0,98);
    circle(142,200,15);
    arc(142,225,10,10,TWO_PI,PI);
    fill(227,11,92);
    rect(139.5,230,5,7);
    fill(218,186,208);
    arc(142,237,20,20,TWO_PI,PI,CHORD);
    //braccio destro
    fill(227,11,92);
    rect(253,165,10,60);
    fill(49,0,98);
    circle(258,200,15);
    arc(258,225,10,10,TWO_PI,PI);
    fill(257,11,92);
    rect(256,230,5,7);
    fill(218,186,208);
    arc(258.75,237,20,20,TWO_PI,PI,CHORD);
    //braccio sinistro
    fill(227,11,92);
    rect(180,215,10,60);
    fill(49,0,98);
    circle(185,245,15);
    fill(218,186,208);
    arc(185,275,20,20,PI,TWO_PI,CHORD);
    //gamba destra
    fill(227,11,92);
    rect(210,215,10,60);
    fill(49,0,98);
    circle(215,245,15);
    fill(218,186,208);
    arc(215,275,20,20,PI,TWO_PI,CHORD);
    //gamba sinistra
}
