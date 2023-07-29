let canvas;
function setup() {
    canvas = createCanvas(440, 480);
    canvas.parent('carro');
}

function draw() {
    background(255, 255, 0);

    // cabina principale con oblo
    fill(0, 130, 0);
    square(150,220,120)
    fill(0, 0, 100);
    circle(200,280,50)

    // cingolo superiore
    fill(0, 100, 0);
    rect(100,150,220,70)
    line(150,220,150,150)
    line(210,220,210,150)
    line(270,220,270,150)
    
    // cingolo inferiore
    fill(0, 100, 0);
    rect(100,340,220,70)
    line(150,340,150,410)
    line(210,340,210,410)
    line(270,340,270,410)
    
    // cannone destro
    fill(0, 100, 0);
    rect(230,255,70,50)
    rect(300,265,50,10)
    rect(300,285,50,10)

    // sporgenze sinistre
    rect(100,240,50,20)
    rect(100,300,50,20)
    
    // linea di simmetria
    line(0,280,420,280)

    saveCanvas(canvas, 'colors_and_styles_exe_carro_03', 'png');
    noLoop();
}
