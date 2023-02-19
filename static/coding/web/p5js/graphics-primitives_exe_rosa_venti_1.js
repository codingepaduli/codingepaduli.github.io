function setup() {
    createCanvas(400, 400);
}

function draw() {
    noFill();
    square(50, 50, 300);

    circle(200, 200, 300);
    triangle(50, 200, 175, 175, 175, 220);
    triangle(195, 50, 175, 175, 220, 175);
    triangle(195, 350, 175, 220, 220, 220);
    triangle(350, 190, 220, 175, 220, 220);
    triangle(50, 50, 175, 220, 220, 175);
    triangle(350, 50, 175, 175, 220, 220);
    triangle(350, 350, 175, 220, 220, 175);
    triangle(50, 350, 220, 220, 175, 175);
    square(175, 175, 45);
}
