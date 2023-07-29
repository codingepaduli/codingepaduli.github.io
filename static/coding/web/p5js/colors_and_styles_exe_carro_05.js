let canvas;
function setup() {
    canvas = createCanvas(540, 440);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 255);

    // corpo centrale
    fill(0, 100, 0);
    rect(180, 130, 180, 200);

    // ruota sinistra con cingoli
    fill(0, 100, 0);
    rect(100, 110, 80, 260);

    line(100, 130, 180, 130);
    line(100, 150, 180, 150);
    line(100, 170, 180, 170);
    line(100, 190, 180, 190);
    line(100, 210, 180, 210);
    line(100, 230, 180, 230);

    line(100, 250, 180, 250);
    line(100, 270, 180, 270);
    line(100, 290, 180, 290);
    line(100, 310, 180, 310);
    line(100, 330, 180, 330);
    line(100, 350, 180, 350);

    // ruota destra con cingoli
    fill(0, 100, 0);
    rect(360, 110, 80, 260);

    line(360, 130, 440, 130);
    line(360, 150, 440, 150);
    line(360, 170, 440, 170);
    line(360, 190, 440, 190);
    line(360, 210, 440, 210);
    line(360, 230, 440, 230);

    line(360, 250, 440, 250);
    line(360, 270, 440, 270);
    line(360, 290, 440, 290);
    line(360, 310, 440, 310);
    line(360, 330, 440, 330);
    line(360, 350, 440, 350);

    // cannone centrale con proiettili
    fill(0, 255, 0);
    circle(270, 230, 90);
    rect(260, 100, 20, 140);

    fill(255, 0, 0);
    circle(270, 50, 20);
    circle(270, 50, 10);

    // cannone sinistro con proiettili
    fill(0, 255, 0);
    circle(210, 180, 50);
    rect(200, 80, 20, 100);

    fill(255, 0, 0);
    circle(210, 30, 20);
    circle(210, 30, 10);

    // cannone destro con proiettili
    fill(0, 255, 0);
    circle(330, 180, 50);
    rect(320, 80, 20, 100);

    fill(255, 0, 0);
    circle(330, 30, 20);
    circle(330, 30, 10);

    // mitra sinistra in alto con proiettili
    fill(0, 255, 0);
    circle(200, 230, 30);
    rect(160, 225, 40, 10);

    fill(255, 0, 0);
    circle(140, 230, 10);

    // mitra sinistra centrale con proiettili
    fill(0, 255, 0);
    circle(200, 260, 30);
    rect(160, 255, 40, 10);

    fill(255, 0, 0);
    circle(140, 260, 10);

    // mitra sinistra in basso con proiettili
    fill(0, 255, 0);
    circle(200, 290, 30);
    rect(160, 285, 40, 10);

    fill(255, 0, 0);
    circle(140, 290, 10);

    // mitra destra in alto con proiettili
    fill(0, 255, 0);
    circle(340, 230, 30);
    rect(340, 225, 40, 10);

    fill(255, 0, 0);
    circle(400, 230, 10);

    // mitra destra centrale con proiettili
    fill(0, 255, 0);
    circle(340, 260, 30);
    rect(340, 255, 40, 10);

    fill(255, 0, 0);
    circle(400, 260, 10);

    // mitra destra in basso con proiettili
    fill(0, 255, 0);
    circle(340, 290, 30);
    rect(340, 285, 40, 10);

    fill(255, 0, 0);
    circle(400, 290, 10);

    // oblò
    fill(0, 256, 256);
    circle(270, 300, 45);

    // linea di simmetria
    line(270, 0, 270, 480);

    saveCanvas(canvas, 'colors_and_styles_exe_carro_05', 'png');
    noLoop();
}
