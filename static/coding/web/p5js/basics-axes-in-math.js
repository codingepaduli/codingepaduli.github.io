// requires p5Utils.js

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('axes');
}

function draw() {
    var X = width/2;
    var Y = height/2;
    var step=75;

    background(230);

    fill(200, 200, 255);
    strokeWeight(0);
    rect(X-2, 0, width, Y-2);

    strokeWeight(3);
    fill(0);
    drawMathAxes(X, Y);

    strokeWeight(6);
    drawGridPoints(X, Y, step);

    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);

    for (let i = 0, count = -4; i < width; i+=step) {
      text(-count, X + 20, i-5);
      text(count, i+10, Y + 20);
      count++;
    }
}
