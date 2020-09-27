let x = 100;

function setup() {
    let canvasNode = document.querySelector('#example02');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('example02');
}

function draw() {
    // background(220);
    circle(x, 150, 50);

    x = x + 5;
}
