let canvas;
function setup() {
    canvas = createCanvas(360, 450);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 0);
    
    // corpo centrale
    fill(0, 100, 0);
    square(60, 100, 240);
    
    // quadrato centrale
    fill(0, 250, 0);
    square(140, 150, 80);
    fill(0, 0, 240);
    circle(180, 190, 50);
    
    // cannone verso l'alto con proiettile
    fill(250, 0, 0);
    rect(165, 55, 30, 90);
    fill(0, 0, 240);
    circle(180, 35, 30);

    // cannone sinistro con proiettile
    fill(250, 0, 0);
    rect(45, 175, 90, 30);
    fill(0, 0, 240);
    circle(25, 190, 30);

    // cannone destro con proiettile
    fill(250, 0, 0);
    rect(225, 175, 90, 30);
    fill(0, 0, 240);
    circle(335, 190, 30);

    // mitragliatrice sinistra
    fill(0, 250, 0);
    ellipse(90, 330, 85, 35);

    fill(250, 0, 0);
    circle(70, 330, 20);
    circle(90, 330, 20);
    circle(110, 330, 20);

    fill(0, 250, 0);
    rect(65, 350, 20, 40);
    rect(95, 350, 20, 40);

    // proiettili mitragliatrice sinistra
    fill(0, 0, 240);
    circle(75, 405, 20);
    circle(105, 405, 20);

    // mitragliatrice centrale
    fill(0, 250, 0);
    ellipse(180, 330, 85, 35);
    
    fill(250, 0, 0);
    circle(160, 330, 20);
    circle(180, 330, 20);
    circle(200, 330, 20);

    fill(0, 250, 0);
    rect(155, 350, 20, 40);
    rect(185, 350, 20, 40);

    // proiettili mitragliatrice centrale
    fill(0, 0, 240);
    circle(165, 405, 20);
    circle(195, 405, 20);
    
    // mitragliatrice destra
    fill(0, 250, 0);
    ellipse(270, 330, 85, 35);
    
    fill(250, 0, 0);
    circle(250, 330, 20);
    circle(270, 330, 20);
    circle(290, 330, 20);
    
    fill(0, 250, 0);
    rect(245, 350, 20, 40);
    rect(275, 350, 20, 40);

    // proiettili mitragliatrice destra
    fill(0, 0, 240);
    circle(255, 405, 20);
    circle(285, 405, 20);
    
    // linea di simmetria
    line(180, 0, 180, 450);
    saveCanvas(canvas, 'colors_and_styles_exe_carro_01', 'png');
    noLoop();
}
