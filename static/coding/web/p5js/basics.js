let x = 100;

function setup() {
    let canvasNode = document.querySelector('#basics');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, /* lascia 400 */ 400).parent('basics');
}

function draw() {
    background(220);

    point(20, 20);
    line(80, 20, 120, 40);
    triangle(20, 60, 20, 100, 60, 100);
    circle(100, 80, 40);
    square(20, 140, 40);
    rect(80, 140, 80, 20);

    ellipse(60, 220, 80, 40);
    arc(40, 300, 40, 40, PI, TWO_PI);
    arc(100, 300, 40, 80, PI, TWO_PI);

    text("questo è un testo", 20, 340);
    text("questo è un testo troppo lungo", 20, 360, 160, 20);
}
