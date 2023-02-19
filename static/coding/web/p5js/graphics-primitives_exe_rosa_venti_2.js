function setup() {
    createCanvas(490, 490);
}

function draw() {
    background(220, 0, 220);

    fill(0, 0, 0);
    square(50, 50, 390);
    fill(200);
    circle(245, 245, 390);
  
    fill(0, 200, 280);
    triangle(245, 50, 220, 220, 270, 220);
    fill(10, 100, 200);
    triangle(50, 245, 220, 270, 220, 220);

    fill(200, 0, 100);
    triangle(440, 50, 270, 270, 220, 220);
    fill(220, 220, 100);
    triangle(440, 440, 220, 270, 270, 220);
    fill(180, 0, 200);
    triangle(50, 440, 270, 270, 220, 220);
    fill(180, 70, 0);
    triangle(50, 50, 220, 270, 270, 220);

    fill(30, 100, 30);
    triangle(245, 440, 270, 270, 220, 270);
    fill(150, 170, 200);
    triangle(270, 220, 270, 270, 440, 245);

    fill(200, 0, 0);
    square(220, 220, 50);
}
