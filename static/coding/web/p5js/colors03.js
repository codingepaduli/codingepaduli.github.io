function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('colors03');
}

function draw() {
    colorMode(RGB);
    background(0, 0, 255);

    textSize(16);
    textAlign(RIGHT, CENTER);
    textStyle(ITALIC);
    text("testo", 100, 50);
}
