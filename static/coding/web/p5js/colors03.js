function setup() {
    let canvasNode = document.querySelector('#colors03');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('colors03');
}

function draw() {
    colorMode(RGB);
    background(0, 0, 255);

    textSize(16);
    textAlign(RIGHT, CENTER);
    textStyle(ITALIC);
    text("testo", 100, 50);
}
