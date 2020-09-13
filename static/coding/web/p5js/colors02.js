function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('colors02');
}

function draw() {
    colorMode(RGB);
    background(0, 0, 255);

    strokeWeight(4);     // primo spessore di linea
    stroke(0, 204, 255); // primo colore di linea

    fill(255, 255, 0); // primo colore di riempimento
    triangle(20, 60, 20, 100, 60, 100);
    circle(100, 80, 40);

    strokeWeight(8);     // secondo spessore di linea
    stroke(255, 204, 0); // secondo colore di linea

    fill(0, 255, 255); // secondo colore di riempimento
    square(20, 140, 40);
    rect(80, 140, 80, 20);
}
