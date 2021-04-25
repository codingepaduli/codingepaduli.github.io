let x = 0;
let y = 0;

function setup() {
    let canvasNode = document.querySelector('#interactivity02');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('interactivity02');
}

function draw() {
    x = mouseX;
    y = mouseY;
    circle(x, y, 50);
}
