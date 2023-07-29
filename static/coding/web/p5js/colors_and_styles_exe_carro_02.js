let canvas;
function setup() {
    canvas = createCanvas(330, 440);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 0);

    // ruota superiore
    fill(0, 100, 0);
    rect(70, 120, 180, 50);

    // cingoli ruota superiore
    line(90, 170, 90, 120);
    line(110, 170, 110, 120);
    line(130, 170, 130, 120);
    line(150, 170, 150, 120);
    line(170, 170, 170, 120);
    line(190, 170, 190, 120);
    line(210, 170, 210, 120);
    line(230, 170, 230, 120);
    
    // ruota inferiore
    fill(0, 100, 0);
    rect(70, 270, 180, 50);
    
    // corpo centrale
    fill(255, 0, 0);
    rect(70, 170, 180, 100);

    // cingoli ruota inferiore
    line(90, 320, 90, 270);
    line(110, 320, 110, 270);
    line(130, 320, 130, 270);
    line(150, 320, 150, 270);
    line(170, 320, 170, 270);
    line(190, 320, 190, 270);
    line(210, 320, 210, 270);
    line(230, 320, 230, 270);

    // cannone destro con proiettile
    fill(255, 255, 255);
    rect(250, 210, 60, 20);
    fill(255, 0, 0);
    circle(320, 220, 12);

    // cannoni superiori con proiettili
    fill(255, 255, 255);
    rect(90, 90, 20, 30);
    rect(150, 90, 20, 30);
    rect(210, 90, 20, 30);
    fill(255, 0, 0);
    circle(100, 80, 12);
    circle(160, 80, 12);
    circle(220, 80, 12);

    // cannoni inferiori con proiettili
    fill(255, 255, 255);
    rect(90, 320, 20, 30);
    rect(150, 320, 20, 30);
    rect(210, 320, 20, 30);
    fill(255, 0, 0);
    circle(100, 360, 12);
    circle(160, 360, 12);
    circle(220, 360, 12);

    // cannoni sinistri con proiettili
    fill(255, 255, 255);
    rect(70, 190, 20, 60);
    rect(20, 190, 70, 15);
    rect(20, 235, 70, 15);
    fill(255, 0, 0);
    circle(10, 197, 12);
    circle(10, 243, 12);
   
    // oblo
    fill(0, 255, 255);
    circle(210, 220, 80);
        
    // linea di simmetria
    line(0, 220, 440, 220);
    
    saveCanvas(canvas, 'colors_and_styles_exe_carro_02', 'png');
    noLoop();
}
