let canvas;
function setup() {
    canvas = createCanvas(570, 770);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 255);

    // corpo principale
    fill(10, 20, 10);
    rect(200, 285, 300, 200, 10);

    fill(20, 30, 15);
    rect(240, 295, 180, 180);

    // decorazioni corpo principale
    fill(0, 0, 0);
    rect(305, 310, 50, 10, 5);
    
    fill(10, 10, 0);
    rect(305, 460, 100, 10, 5);
    rect(305, 445, 100, 10, 5);

    fill(0, 0, 0);
    rect(270, 445, 30, 25);

    // cingolo superiore
    fill(20, 50, 10);
    rect(165, 195, 360, 90, 10);
    
    line(200, 195, 200, 285);
    line(250, 195, 250, 285);
    line(300, 195, 300, 285);
    line(350, 195, 350, 285);
    line(400, 195, 400, 285);
    line(450, 195, 450, 285);
    line(500, 195, 500, 285);

    // cingolo inferiore
    fill(20, 50, 10);
    rect(165, 485, 360, 90, 10);
    
    line(200, 485, 200, 575);
    line(250, 485, 250, 575);
    line(300, 485, 300, 575);
    line(350, 485, 350, 575);
    line(400, 485, 400, 575);
    line(450, 485, 450, 575);
    line(500, 485, 500, 575);
    
    // cannone principale
    fill(20, 40, 20);
    rect(10, 363, 60, 35, 5);
    fill(70, 90, 70);
    rect(70, 368, 110, 25);
    fill(20, 50, 10);
    rect(180, 355, 90, 50);
    fill(70, 100, 70);
    circle(330, 380, 120);
    fill(70, 90, 70);
    circle(330, 380, 80);
    
    // cannone superiore
    fill(50, 50, 50);
    rect(180, 310, 80, 30, 5);
    fill(80, 80, 80);
    rect(80, 315, 100, 20);

     // proiettili cannone superiore
     fill(150, 30, 50);
     circle(60, 325, 20);
     circle(30, 325, 20);
    
    // cannone inferiore
    fill(50, 50, 50);
    rect(180, 425, 80, 30, 5);
    fill(80, 80, 80);
    rect(80, 430, 100, 20);

    // proiettili cannone inferiore
    fill(150, 30, 50);
    circle(60, 440, 20);
    circle(30, 440, 20);
    
    // mitra superiore sinistro
    fill(80, 80, 80);
    rect(170, 245, 100, 50, 10);
    fill(100, 100, 100);
    rect(120, 255, 50, 10);
    rect(120, 275, 50, 10);
    rect(120, 250, 20, 40);

    // proiettili mitra superiore sinistro
    fill(200, 200, 50);
    circle(20, 260, 10);
    circle(40, 260, 10);
    circle(60, 260, 10);
    circle(80, 260, 10);
    circle(100, 260, 10);

    circle(20, 280, 10);
    circle(40, 280, 10);
    circle(60, 280, 10);
    circle(80, 280, 10);
    circle(100, 280, 10);
    
    // mitra superiore centrale
    fill(80, 80, 80);
    rect(280, 235, 100, 60, 10);
    fill(100, 100, 100);
    rect(230, 250, 50, 10);
    rect(230, 270, 50, 10);
    rect(230, 245, 20, 40);

    // proiettili mitra superiore centrale
    fill(200, 200, 50);
    circle(180, 255, 10);
    circle(200, 255, 10);
    circle(220, 255, 10); 

    circle(180, 275, 10);
    circle(200, 275, 10);
    circle(220, 275, 10);

    // mitra superiore destro
    fill(80, 80, 80);
    rect(390, 225, 100, 70, 10);
    fill(100, 100, 100);
    rect(340, 245, 50, 10);
    rect(340, 265, 50, 10);
    rect(340, 240, 20, 40);

    // proiettili mitra superiore destro
    fill(200, 200, 50);
    circle(290, 250, 10);
    circle(310, 250, 10);
    circle(330, 250, 10);

    circle(290, 270, 10);
    circle(310, 270, 10);
    circle(330, 270, 10);
    
    // mitra inferiore sinistro
    fill(80, 80, 80);
    rect(170, 475, 100, 50, 10);
    fill(100, 100, 100);
    rect(120, 485, 50, 10);
    rect(120, 505, 50, 10);
    rect(120, 480, 20, 40);

    // proiettili mitra inferiore sinistro
    fill(200, 200, 50);
    circle(20, 490, 10);
    circle(40, 490, 10);
    circle(60, 490, 10);
    circle(80, 490, 10);
    circle(100, 490, 10);

    circle(20, 510, 10);
    circle(40, 510, 10);
    circle(60, 510, 10);
    circle(80, 510, 10);
    circle(100, 510, 10);

    // mitra inferiore centrale
    fill(80, 80, 80);
    rect(280, 475, 100, 60, 10);
    fill(100, 100, 100);
    rect(230, 490, 50, 10);
    rect(230, 510, 50, 10);
    rect(230, 485, 20, 40);

    // proiettili mitra inferiore centrale
    fill(200, 200, 50);
    circle(180, 495, 10);
    circle(200, 495, 10);
    circle(220, 495, 10); 
    
    circle(180, 515, 10);
    circle(200, 515, 10);
    circle(220, 515, 10);

    // mitra inferiore destro
    fill(80, 80, 80);
    rect(390, 475, 100, 70, 10);
    fill(100, 100, 100);
    rect(340, 495, 50, 10);
    rect(340, 515, 50, 10);
    rect(340, 490, 20, 40);

    // proiettili mitra inferiore destro
    fill(200, 200, 50);
    circle(290, 500, 10);
    circle(310, 500, 10);
    circle(330, 500, 10);
    
    circle(290, 520, 10);
    circle(310, 520, 10);
    circle(330, 520, 10);
    
    // linea di simmetria
    line(0, 380, 570, 380);

    saveCanvas(canvas, 'colors_and_styles_exe_carro_06', 'png');
    noLoop();
}
