let x = 100;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('example02');
}

function draw() {
    // background(220);
    circle(x, 150, 50);

    x = x + 5;
}
