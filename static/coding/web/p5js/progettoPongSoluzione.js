// ball X and Y
let x = 50;
let y = 50;
let speed = 5;

// ball directions
let dx = 1;
let dy = 1;

// goals
p1Goals=0;

// rect height
let rectHeight;

// ball diameter and radius
let d;
let r;

function preload() {
    console.info("displayWidth / displayHeight: " + displayWidth + " " + displayHeight);
    console.info("windowWidth / windowHeight: " + windowWidth + " " + windowHeight);
    console.info("pixelDensity: " + pixelDensity());

    // ball diameter and radius
    d = Math.min(50, displayWidth * pixelDensity() * 0.9 / 15);
    r = d/2;
    console.info("raggio: " + r);

    // rect height
    rectHeight = 2*d;
}

function setup() {
    createCanvas(windowWidth * pixelDensity() * 0.9, windowWidth / 2 *  pixelDensity() * 0.9).parent('progettoPong');
}

function draw() {
    background(50,50,50);

    // draw the goals
    textSize(16);
    text("P1: " + p1Goals, 150, 50);

    // get the Y axe from the mouse
    let rectY = mouseY;

    // set the min and max for the Y axes of the rectangle
    if (rectY < 0) {
        rectY = 0;
    }
    if (rectY + rectHeight > height) {
        rectY = height - rectHeight;
    }

    // draw the rectangle
    rect(10,rectY,10,rectHeight);

    // the ball will bounce on the top and bottom borders
    if (y < r || y + r > height) {
        dy = -dy;
    }

    // the ball will bounce on the right border
    if (x + r > width) {
        dx = -dx;
    }

    // the ball is in the limit
    if (x-r <= 20) {
        if (y >= rectY - r && y < rectY+rectHeight + r) {
            // the ball will bounce on the rect
            speed += 3;
            p1Goals=p1Goals+1;
        } else {
            speed -= 3;
            // loose a point
            p1Goals=p1Goals-1;
        }
        // bounce out of the limit
        x = 2*20+r;
        dx = -dx;
    }

    // increase speed
    x = x + dx*speed;
    y = y + dy*speed;

    // draw the ball
    fill(255, 204, 100);
    ellipse(x, y, d, d);
}
