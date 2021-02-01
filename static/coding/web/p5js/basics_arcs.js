let diameterCircles = 175;
let heightRow1 = 50;
let heightRow2 = 350;

function setup() {
    createCanvas(750, 450);
    textSize(18);
    //misurazione angoli in gradi sessagesimali
    angleMode(DEGREES);
}

function draw() {
    background(255,255,255);

    // archi di circonferenza con angoli misurati in senso orario
    fill(0,128,128);
    strokeWeight(6);

    arc(100,heightRow1,diameterCircles,diameterCircles,0,90,PIE);
    arc(300,heightRow1,diameterCircles,diameterCircles,0,90, OPEN);
    arc(550,heightRow1,diameterCircles,diameterCircles,0,90, CHORD);
    arc(150,heightRow2,diameterCircles,diameterCircles,0,270, PIE);
    arc(350,heightRow2,diameterCircles,diameterCircles,0,270, OPEN);
    arc(550,heightRow2,diameterCircles,diameterCircles,0,270,CHORD);

    fill(0,0,0);
    text("PIE", 150, 30);
    text("PIE", 150, 250);
    text("OPEN", 350, 30);
    text("OPEN", 350, 250);
    text("CHORD", 550, 30);
    text("CHORD", 550, 250);
}
