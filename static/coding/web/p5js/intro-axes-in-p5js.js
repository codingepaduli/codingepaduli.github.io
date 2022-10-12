// requires p5Utils.js

function setup() {
    var canvas = createCanvas(550, 550);
    canvas.parent('axes');
}

function draw() {
    var X = 60;
    var Y = 60;
    var step=75;

    background(230);

    fill(190, 190, 255);
    strokeWeight(0);
    rect(X+2, Y+2, width, height);

    strokeWeight(3);
    fill(0);
    drawAxes(X, Y);

    strokeWeight(6);
    drawGridPoints(X, Y, step);

    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);

    for (let i = 0, count = -1; i < width; i+=step) {
      text(count, X-15, i-5);
      text(count, i-5, Y -15);
      count++;
    }

}
