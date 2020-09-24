// ball X and Y
let x = 50;
let y = 50;
let speed = 10;

// ball directions
let dx = 1;
let dy = 1;

// goals
p1Goals=0;

// set the numbers of row and columns
let righePalline = 4;
let colonnePalline = 7;

// create a matrix for the (X,Y and color) of each ball
let pallineX = new Array(righePalline);
let pallineY = new Array(righePalline);
let pallineColore = new Array(righePalline);
for (let i = 0; i<righePalline; i++) {
    pallineX[i] = new Array(colonnePalline);
    pallineY[i] = new Array(colonnePalline);
    pallineColore[i] = new Array(colonnePalline);
}

// my rect height
let rectHeight;

// ball diameter and radius
let d;
let r;

function preload() {
    console.info("displayWidth / displayHeight: " + displayWidth + " " + displayHeight);
    console.info("windowWidth / windowHeight: " + windowWidth + " " + windowHeight);
    console.info("pixelDensity: " + pixelDensity());

    // ball diameter and radius
    d = Math.min(50, displayWidth * 0.9 / 15);
    r = d/2;
    console.info("raggio: " + r);

    // rect height
    rectHeight = 2*d;

    let centerX = displayWidth * 0.9 / 2;

    // initialize (X,Y and color) of each ball
    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            pallineX[i][j] = centerX + i*d;
            pallineY[i][j] = j * d + r;
            pallineColore[i][j] = 0;
        }
    }
}

function setup() {
    createCanvas(windowWidth * 0.9, windowWidth / 2 * 0.9).parent('progettoArknoid');
}

function draw() {
    background(50,50,50);

    // draw the others ball
    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            if (pallineX[i][j] != null && pallineY[i][j] != null) {
                ellipse(pallineX[i][j], pallineY[i][j], d, d);
            }
        }
    }

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

    // draw my rectangle
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
            // the ball will bounce on my rect, I win a point
            // speed += 3;
            p1Goals=p1Goals+1;
        } else {
            // speed -= 3;
            // the ball will NOT bounce on my rect, I loose a point
            p1Goals=p1Goals-1;
        }
        // bounce out of the limit
        x = 2*20+r;
        dx = -dx;
    }

    // move
    x = x + dx*speed;
    y = y + dy*speed;

    // check the contacts with the other balls
    let distanza = 0;

    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            distanza = Math.sqrt(
                Math.pow(pallineX[i][j] - x, 2) +
                Math.pow(pallineY[i][j] - y, 2)
            );

            // if the ball touchs one other ball
            if (distanza < d) {
                // the first ball will bounce
                dx = -dx;
                dy = -dy;

                // remove the second ball
                pallineX[i][j] = null;
                pallineY[i][j] = null;
            }
        }
    }

    // draw the ball
    fill(255, 204, 100);
    ellipse(x, y, d, d);
}
