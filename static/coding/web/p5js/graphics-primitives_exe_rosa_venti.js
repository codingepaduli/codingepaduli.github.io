function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('rosa');
}

function draw() {
    // disegno area e figure
    strokeWeight(3);
    square(40, 40, width-80);
    circle(width/2, width/2, width-80);

    strokeWeight(8);
    line(40, width/2, width-40, width/2);
    line(width/2, 40, width/2, width-40);
    line(40, 40, width-40, width-40);
    line(40, width-40, width-40, 40);
}
