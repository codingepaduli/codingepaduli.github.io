function setup() {
    let canvasNode = document.querySelector('#colors');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('colors');
}

function draw() {
    colorMode(RGB);
    background(0, 0, 255);

    fill(255, 255, 0); // primo colore, combinando rosso e verde
    triangle(20, 60, 20, 100, 60, 100);
    circle(100, 80, 40);

    fill(0, 255, 255); // secondo colore, combinando verde e blu
    square(20, 140, 40);
    rect(80, 140, 80, 20);
}
