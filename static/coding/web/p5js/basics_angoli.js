let diameterCircles = 75;
let heightRow1 = 100;
let heightRow2 = 300;

function setup() {
    createCanvas(750, 400);
    textSize(18);
    //misurazione angoli in gradi sessagesimali
    angleMode(DEGREES);
}

function draw() {
    background(255,255,255);

    // circonferenze per misurazione angoli in senso orario
    text("Archi di circonferenza con angoli misurati in senso orario", 100, 30);
    fill(255,255,255);

    circle(50,heightRow1,diameterCircles);
    circle(150,heightRow1,diameterCircles);
    circle(250,heightRow1,diameterCircles);
    circle(350,heightRow1,diameterCircles);
    circle(450,heightRow1,diameterCircles);
    circle(550,heightRow1,diameterCircles);
    circle(650,heightRow1,diameterCircles);

    // archi di circonferenza con angoli misurati in senso orario
    fill(0,128,128);

    arc(50,heightRow1,diameterCircles,diameterCircles,0,30);
    arc(150,heightRow1,diameterCircles,diameterCircles,0,45);
    arc(250,heightRow1,diameterCircles,diameterCircles,0,60);
    arc(350,heightRow1,diameterCircles,diameterCircles,0,90);
    arc(450,heightRow1,diameterCircles,diameterCircles,0,180);
    arc(550,heightRow1,diameterCircles,diameterCircles,0,270);
    arc(650,heightRow1,diameterCircles,diameterCircles,0,360);

    // legende
    fill(0,0,0);

    text('30 gradi',20,heightRow1+diameterCircles);
    text('45 gradi',120,heightRow1+diameterCircles);
    text('60 gradi',220,heightRow1+diameterCircles);
    text('90 gradi',320,heightRow1+diameterCircles);
    text('180 gradi',420,heightRow1+diameterCircles);
    text('270 gradi',520,heightRow1+diameterCircles);
    text('360 gradi',620,heightRow1+diameterCircles);

    line(0, height/2, width, height/2)

    // circonferenze per misurazione angoli in senso antiorario
    text("Archi di circonferenza con angoli misurati in senso antiorario", 100, 230);
    fill(255,255,255);

    circle(50,heightRow2,diameterCircles);
    circle(150,heightRow2,diameterCircles);
    circle(250,heightRow2,diameterCircles);
    circle(350,heightRow2,diameterCircles);
    circle(450,heightRow2,diameterCircles);
    circle(550,heightRow2,diameterCircles);
    circle(650,heightRow2,diameterCircles);

    // archi di circonferenza con angoli misurati in senso antiorario
    fill(0,128,128);

    arc(50,heightRow2,diameterCircles,diameterCircles,330,360);
    arc(150,heightRow2,diameterCircles,diameterCircles,315,360);
    arc(250,heightRow2,diameterCircles,diameterCircles,300,360);
    arc(350,heightRow2,diameterCircles,diameterCircles,270,360);
    arc(450,heightRow2,diameterCircles,diameterCircles,180,360);
    arc(550,heightRow2,diameterCircles,diameterCircles,90,360);
    arc(650,heightRow2,diameterCircles,diameterCircles,0,360);

    // legende
    fill(0,0,0);
    text('30 gradi',20,heightRow2+diameterCircles);
    text('45 gradi',120,heightRow2+diameterCircles);
    text('60 gradi',220,heightRow2+diameterCircles);
    text('90 gradi',320,heightRow2+diameterCircles);
    text('180 gradi',420,heightRow2+diameterCircles);
    text('270 gradi',520,heightRow2+diameterCircles);
    text('360 gradi',620,heightRow2+diameterCircles);
}
