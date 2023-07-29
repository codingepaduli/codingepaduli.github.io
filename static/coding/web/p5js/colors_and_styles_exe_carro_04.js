let canvas;
function setup() {
    canvas = createCanvas(440, 480);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 255);

    // cabina principale con oblo
    fill(0, 130, 0);
    square(150, 220, 120);
    fill(0, 0, 100);
    circle(200, 280, 50);

    // cingolo superiore
    fill(0, 100, 0);
    rect(100, 150, 220, 70);
    line(150, 220, 150, 150);
    line(210, 220, 210, 150);
    line(270, 220, 270, 150);
    
    // cingolo inferiore
    fill(0, 100, 0);
    rect(100, 340, 220, 70);
    line(150, 340, 150, 410);
    line(210, 340, 210, 410);
    line(270, 340, 270, 410);
    
    // cannoni frontali (destra);
    fill(0, 100, 0);
    rect(230, 255, 70, 50);
    rect(300, 265, 50, 10);
    rect(300, 285, 50, 10);

    fill(255, 0, 0);
    circle(370, 270, 15);
    circle(370, 290, 15);

    // cannoni sul retro (sinistra);
    rect(100, 240, 50, 20);
    rect(100, 300, 50, 20);

    fill(255, 0, 0);
    circle(80, 250, 30);
    circle(80, 310, 30);

    // mitragliatrice superiore sinistra
    fill(0, 255, 0);
    square(100, 130, 20);
    rect(100, 110, 50, 20);

    fill(255, 0, 0);
    circle(160, 120, 10);
    circle(180, 120, 10);

    // mitragliatrice superiore centrale
    fill(0, 255, 0);
    square(205, 130, 20);
    rect(205, 110, 50, 20);

    fill(255, 0, 0);
    circle(265, 120, 10);
    circle(285, 120, 10);

    // mitragliatrice superiore destra
    fill(0, 255, 0);
    square(295, 130, 20);
    rect(295, 110, 50, 20);

    fill(255, 0, 0);
    circle(355, 120, 10);
    circle(375, 120, 10);
    
    // mitragliatrice inferiore sinistra
    fill(0, 255, 0);
    square(100, 410, 20);
    rect(100, 430, 50, 20);

    fill(255, 0, 0);
    circle(160, 440, 10);
    circle(180, 440, 10);

    // mitragliatrice inferiore centrale
    fill(0, 255, 0);
    square(205, 410, 20);
    rect(205, 430, 50, 20);

    fill(255, 0, 0);
    circle(265, 440, 10);
    circle(285, 440, 10);

    // mitragliatrice inferiore destra
    fill(0, 255, 0);
    square(295, 410, 20);
    rect(295, 430, 50, 20);

    fill(255, 0, 0);
    circle(355, 440, 10);
    circle(375, 440, 10);

    // linea di simmetria
    line(0, 280, 420, 280);

    saveCanvas(canvas, 'colors_and_styles_exe_carro_04', 'png');
    noLoop();
}
