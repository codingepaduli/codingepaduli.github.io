function setup() {
    createCanvas(1980, 1100);
}

function draw() {
    background(250);
    line(1000, 0, 1000, 2000);


    //testa
    fill(156,156,156); //painting
    square(900, 150, 200);


    //occhi
    fill(16,16,16); //painting
    square(1050, 200, 20); //occhio sx
    square(930, 200, 20); //occhio dx


    //naso
    fill(16,16,16); //painting
    triangle(970, 260, 1000, 240, 1030, 260);


    //bocca
    fill(16,16,16); //painting
    line(950, 310, 1050, 310);


    //antenne
    fill(156,156,156); //painting
    line(950, 150, 950, 75); //antenna sx
    line(1050, 150, 1050, 75); //antenna dx
    circle(950, 80, 20); //cima antenna sx
    circle(1050, 80, 20); //cima antenna dx

    //corpo
    fill(156,156,156); //painting
    rect(850, 350, 300, 400);


    //braccia
    fill(156,156,156); //painting
    rect(650,400,200,50); //braccio
    rect(650,400,50,250); //avambraccio
    rect(1150,400,200,50); //braccio
    rect(1300,400,50,250); //avambraccio


    //mani
    //mani parte esterna
    fill(255,0,0); //painting
    arc(675, 710, 120, 140, PI, TWO_PI); //mani parte esterna sx
    arc(1325, 710, 120, 140, PI, TWO_PI); //mani parte esterna dx
    //mani parte interna
    fill(250,250,250); //painting
    arc(675, 710, 80, 100, PI, TWO_PI);
    arc(1325, 710, 80, 100, PI, TWO_PI);


    //gambe
    fill(156,156,156); //painting
    rect(900,750,75,300); //gamba sx
    rect(1025,750,75,300); //gamba dx


    //piedi
    fill(0,0,255); //painting
    rect(825,1050,150,50); //piede sx
    rect(1025,1050,150,50); //piede dx
}
